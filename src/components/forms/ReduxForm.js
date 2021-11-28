import React, { Fragment, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from "react-input-mask";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { reduxFormcSchema } from "../../validations/reduxFormValidation";

// Redux Imports
import { connect, useDispatch } from "react-redux";
import { addUserAction, deleteUserAction, getUsersAction } from "../../actions";
const ReduxForm = (props) => {
  const [usersdata, setUsersdata] = useState([]);
  // Variables
  const countries = [
    { label: "Pakistan", value: "Pakistan" },
    { label: "Canada", value: "Canada" },
    { label: "United Kingdom", value: "United Kingdom" },
    { label: "Germany", value: "Germany" },
    { label: "Iran", value: "Iran" },
  ];
  // React Select Styles
  const appliedStyles = {
    control: (base, state) => ({
      ...base,
      border: "1px solid red",
    }),
  };
  // Yup Validations
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    getValues,
    watch,
  } = useForm({ resolver: yupResolver(reduxFormcSchema) });
  const submitForm = (data) => {
    console.log(data.country.value);
    props.addUserAction({
      ...data,
      id: new Date().getTime(),
      country: data.country.value,
    });
    console.log(data);
  };
  // useEffect(() => {
  //   console.log(props.users);
  // }, [props.users]);
  // const watchEmail = watch("email");
  useEffect(() => {
    props.getUsersAction();
  }, []);
  useEffect(() => {
    console.log(props.users);
  }, [props.users]);
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="shadow p-3  bg-body rounded">
              <div className="card-header">
                <h3>Redux Form For Learning</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(submitForm)}>
                  <div className="form-group my-3">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name"
                      className={`form-control ${
                        errors.name && "border border-danger"
                      }`}
                      {...register("name")}
                    />
                    <small className="text-danger">
                      {errors.name?.message}
                    </small>
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      className={`form-control ${
                        errors.email && "border border-danger"
                      }`}
                      {...register("email")}
                    />
                    <small className="text-danger">
                      {errors.email?.message}
                    </small>
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="country">Country</label>
                    <Controller
                      name="country"
                      render={({ field }) => (
                        <Select
                          {...field}
                          placeholder="Select Your Country"
                          options={countries}
                          styles={errors.country && appliedStyles}
                          isClearable
                        />
                      )}
                      control={control}
                    />
                    <small className="text-danger">
                      {errors.country?.message}
                    </small>
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-dark w-100"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="shadow p-3 bg-body rounded">
              <div className="card-header">
                <h4>Users Data</h4>
              </div>
              <div className="card-body">
                <table className="ui single line table">
                  <thead>
                    <tr>
                      {props.users.length > 0 &&
                        Object.keys(props.users[0]).map((obj, i) => (
                          <Fragment key={i}>
                            <th>{obj.toUpperCase().replaceAll("_", " ")}</th>
                            {i === Object.keys(props.users[0]).length - 1 && (
                              <th>Action</th>
                            )}
                          </Fragment>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {props.users.length > 0 &&
                      props.users.map((user, i) => (
                        <tr key={i}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.country}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={(e) => props.deleteUserAction(user.id)}
                            >
                              Delete User
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { users: state.users };
};
export default connect(mapStateToProps, {
  addUserAction,
  getUsersAction,
  deleteUserAction,
})(ReduxForm);
