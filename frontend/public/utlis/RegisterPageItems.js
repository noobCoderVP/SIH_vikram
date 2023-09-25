import {Tag} from "antd";


// tags functions
export const options = [
    { value: 'commercial', color: 'gold' },
    { value: 'corporate', color: 'lime' },
    { value: 'criminal', color: 'green' },
    { value: 'civil', color: 'cyan' },
    { value: 'litigation', color: 'purple' },
    { value: 'family', color: 'pink' },
    { value: 'accident', color: 'red' },
    { value: 'insurance', color: 'blue' },
    { value: 'banking', color: 'orange' },
    { value: 'claims', color: 'brown' },
    { value: 'supreme court', color: 'violet' },
    { value: 'high court', color: 'indigo' },
    { value: 'district court', color: 'teal' },
  ];

export const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const option = options.find((opt) => opt.value === value);

    return (
      <Tag
        className="bg-gray-500"
        color={option ? option.color : 'default-color'} // Use the specified color or a default color
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3,
        }}
      >
        {label}
      </Tag>
    );
};

// Experinece functions
export const experienceItems = [
    {
      label: '1 Year',
      key: '1', 
    },
    {
      label: '2 Years',
      key: '2',
    },
    {
      label: '3 Years',
      key: '3',
    },
    ,
    {
      label: '3+ Years',
      key: '4',
    },
  ];

//   tier functions
export const tierItems = [
    {
      label: 'Platinum',
      key: 4, 
    },
    {
      label: 'Gold',
      key: 3,
    },
    {
      label: 'Silver',
      key: 2,
    },
    ,
    {
      label: 'Bronze',
      key: 1,
    },
  ];
