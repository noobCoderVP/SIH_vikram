import express from "express";
import Lawyer from "../models/lawyer.js";

import { connect } from "../utils/connection.js";
import lawyers_db from "../config/ex_lawyers_db.json" assert { type: "json" };

const searchRouter = express.Router();

searchRouter.get("/search", async (req, res) => {
    try {
        // can implement pagination in frontend later
        // const page = parseInt(req.query.page)-1 || 0;
        // const limit = parseInt(req.query.limit) || 5;

        const search = req.query.search || "";

        // add option to sort by relevance 
        let sort = req.query.sort || "rating";
        let tos = (req.query.tos || "all").toLowerCase();
        let spec = (req.query.spec || "all").toLowerCase();

        const tosOptions = ["lawyer", "notary", "paralegal", "arbitrator", "mediator"]
        const specOptions = [
            "commercial", "corporate", "criminal", "civil", "litigation", "family", "accident", "insurance", "banking", "claims", "supreme court", "high court", "district court",
            "form", "stampduty", "dispute",
          ];

        tos === "all"
        ? (tos = [...tosOptions])
        : (tos = req.query.tos);

        spec === "all"
        ? (spec = [...specOptions])
        : (spec = req.query.spec.split(","));
        
        // sort is taken as what to sort and how to sort ex [rating, desc] or [tier, asc] 
        req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

        // default order to sort if nothing is specified is desc so highest rating and highest tier shown first
        let sortBy = {};
        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = "desc";
        }

        await connect();

        let query = Lawyer.find({ name: { $regex: search, $options: "i" } })

        if (tos !== "all") {
            if (typeof tos === "string") {
                // Convert tos to an array by splitting it using a comma or other appropriate separator
                tos = tos.split(',').map(tag => tag.trim());
            }
        
            query = query.where("type_of_service_tag")
                .in([...tos.map(tag => new RegExp(tag, 'i'))]);
        }

        query = query
                .where("specialization_tags")
                .in(spec.map(tag => new RegExp(tag, 'i')))
                .sort(sortBy);
                    // .skip(page * limit)
                    // .limit(limit);
                    
        // Execute the query and handle the results
        const lawyers = await query.exec();

        const total = await Lawyer.countDocuments({
            type_of_service_tag: { $in: [...tos] },
            specialization_tags: { $in: [...spec] },
            name: { $regex: search, $options: "i" },
        });

        // Implement pagination if needed
        const response = {
            error: false,
            total,
            // page: page + 1,
            // limit,
            // tags: tagOptions,
            lawyers,
        };

        res.status(200).json(response);

    } catch(err) {
        console.log(err);
        res.status(500).json({error:true, message:"Internal Server Error Fetching from database"});
    }
});

// example query : http://localhost:5000/api/search?tos=lawyer&spec=criminal,litigation&sort=rating,desc

// // Temporary filling database
// const insertLawyers = async () => {
//     try {
//         await connect(); // Assuming this function exists for database connection
//         const docs = await Lawyer.insertMany(lawyers_db);
//         console.log(docs);
//     } catch (err) {
//         console.error(err);
//     }
// };

// insertLawyers();

export default searchRouter;
