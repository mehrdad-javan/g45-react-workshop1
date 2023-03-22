import React, { useEffect, useState } from "react";

// Main Component
const DataTable = () => {

  // initializ js variables
  const initialState = [
    {
      id: 1,
      firstName: "Mehrdad",
      lastName: "Javan",
      age: 32,
      birthDate: "1989-02-27",
      country: "Sweden",
      city: "Växjö",
    },
    {
      id: 2,
      firstName: "Simon",
      lastName: "Elbrink",
      age: 26,
      birthDate: "1996-01-01",
      country: "Sweden",
      city: "Växjö",
    },
  ];

  // define state variables 
  const [studentList, setStudentList] = useState(initialState);
  const [showDetails, setShowDetails] = useState(false);
  const [student, setStudent] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    age: 0,
    birthDate: "",
    country: "",
    city: "",
  });

  // TableHeader Sub-Component
  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };

  // TableAction Sub-Component
  const TableAction = (props) => {

    // js functions
    const showDataHandler = () => {
      console.log("STUDENT:", student);
      setStudent(props.student);
      setShowDetails(true);
    };

    return (
      <button type="button" className="btn btn-primary" onClick={showDataHandler}>
        Details
      </button>
    );
  };

  // TableRow Sub-Component
  const TableRow = (props) => {
    

    if (!props.list && props.list.length == 0) {
      return (
        <tbody>
          <tr>
            <td colSpan="5">Data not Found</td>
          </tr>
        </tbody>
      );
    } else {
      return (
        <tbody>
          {props.list.map((student) => {
            const row = (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
                <td>
                  <TableAction student={student} />
                </td>
              </tr>
            );
            return row;
          })}
        </tbody>
      );
    }
  };

  // ShowStudentDetails Sub-Component
  const ShowStudentDetails = () => {

    return (
      <>
        {showDetails && (
          <div className="card">
            <div className="card-header bg-info text-white">
              Student Information
            </div>
            <div className="card-body">
              <h5 className="card-title">
                {student.country} {student.city}
              </h5>
              <p className="card-text">Id: {student.id} </p>
              <p className="card-text">
                Name: {student.firstName} {student.lastName}
              </p>
              <p className="card-text">BirthDate: {student.birthDate} </p>
            </div>
            <div className="card-footer bg-dark">
              <button type="button" className="btn btn-outline-info"
                onClick={() => {
                  setStudent({});
                  setShowDetails(false);
                }}>Hide</button>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <h1> List </h1>
      <table className="table table-striped">
        <TableHeader />
        <TableRow list={studentList} />
      </table>

      <div className="w-50 mx-auto">
        <ShowStudentDetails />
      </div>
    </>
  );
};

export default DataTable;
