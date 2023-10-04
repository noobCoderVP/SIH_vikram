// // PortalToLegalButton.js

function parseTags(responseText) {
    const regex = /\$tos\$(.*?)\$spec\$(.*?)\$end\$/;
    const match = responseText.match(regex);
    if (match) {
        const typeOfService = match[1].trim().replace(/[[\]]/g, '').split(',');
        const specialization = match[2] ? match[2].trim().replace(/[[\]]/g, '').split(',') : [];

        return { typeOfService, specialization };
    }
    return { typeOfService: [], specialization: [] };
}

function PortalToLegalButton({ text }) {    

    function handleClick() {
        const tags = parseTags(text);
        // setSelectedTags({typeOfService:tags.typeOfService, specialization: tags.specialization});
        localStorage.setItem("selectedTypeOfService", JSON.stringify(tags.typeOfService));
        localStorage.setItem("selectedSpecialization", JSON.stringify(tags.specialization));
        // takes you to the lawyer page
        window.location.href = "http://localhost:3000/lawyers";
    };
    return (
        <div className="w-full mx-auto py-4 px-8 flex items-center bg-white rounded-lg shadow-lg">
            <button
                onClick={handleClick}
                className="bg-blue-700 rounded-lg font-semibold p-2 mt-2 mx-auto">
                Go To Suggested Legal Services
            </button>
        </div>
    );
}

export default PortalToLegalButton;
