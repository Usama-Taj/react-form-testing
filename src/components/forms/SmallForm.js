import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { smallFormSchema } from "../../validations/smallFormValidation";
import InputMask from "react-input-mask";
import NumberFormat from "react-number-format";
import Select from "react-select";
const SmallForm = () => {
  const [cnic, setCnic] = useState("");
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
  } = useForm({ resolver: yupResolver(smallFormSchema) });
  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="shadow p-3  bg-body rounded">
              <div className="card-header">
                <h3>Form Validation Using Yup</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(submitForm)} noValidate>
                  <div className="form-group my-2">
                    <label htmlFor="name">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name"
                      {...register("name")}
                      style={{
                        border: errors.name ? "1px solid red" : "",
                      }}
                    />
                    <small className="text-danger">
                      {errors.name?.message}
                    </small>
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="fathername">Father Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="fathername"
                      id="fathername"
                      placeholder="Enter Father Name"
                      {...register("fathername")}
                      style={{
                        border: errors.fathername ? "1px solid red" : "",
                      }}
                    />
                    <small className="text-danger">
                      {errors.fathername?.message}
                    </small>
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="country">Country</label>
                    <Controller
                      name="country"
                      render={({
                        field,
                        fieldState: { invalid, isTouched, isDirty, error },
                        formState,
                      }) => (
                        <Select
                          {...field}
                          placeholder="Select Country"
                          options={[
                            { value: "Pakistan", label: "Pakistan" },
                            { value: "USA", label: "USA" },
                            { value: "Canada", label: "Canada" },
                            { value: "Turkey", label: "Turkey" },
                            { value: "Newzealand", label: "Newzealand" },
                            { value: "UK", label: "UK" },
                          ]}
                          styles={errors.country && appliedStyles}
                          isClearable
                        />
                      )}
                      control={control}
                    />

                    {/* <input
                      className="form-control"
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Enter Country"
                      {...register("country")}
                      style={{
                        border: errors.country ? "1px solid red" : "",
                      }}
                    /> */}
                    <small className="text-danger">
                      {errors.country?.message}
                    </small>
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="city">City</label>
                    <Controller
                      name="city"
                      render={({
                        field,
                        fieldState: { invalid, isTouched, isDirty, error },
                        formState,
                      }) => (
                        <Select
                          {...field}
                          placeholder="Select City"
                          options={[
                            { value: "Islamabad", label: "Islamabad" },
                            { value: "Multan", label: "Multan" },
                            { value: "Lahore", label: "Lahore" },
                            { value: "Karachi", label: "Karachi" },
                            { value: "Peshawar", label: "Peshawar" },
                            { value: "Lahore", label: "Lahore" },
                          ]}
                          styles={errors.city && appliedStyles}
                          isClearable
                          isMulti
                        />
                      )}
                      control={control}
                    />
                    <small className="text-danger">
                      {errors.city?.message}
                    </small>
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="phone">Phone</label>
                    <input
                      className="form-control"
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Enter Phone"
                      {...register("phone")}
                      style={{
                        border: errors.phone ? "1px solid red" : "",
                      }}
                    />
                    <small className="text-danger">
                      {errors.phone?.message}
                    </small>
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="bank_balance">Bank Balance</label>
                    <Controller
                      name="bank_balance"
                      render={({ field }) => (
                        <NumberFormat
                          {...field}
                          className={`form-control ${
                            errors.bank_balance && "border border-danger"
                          }`}
                          id="bank_balance"
                          decimalScale="2"
                          allowNegative={false}
                          thousandSeparator={true}
                          placeholder="Enter Bank Balance"
                        />
                      )}
                      control={control}
                    />
                    <small className="text-danger">
                      {errors.bank_balance?.message}
                    </small>
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="cnic">CNIC</label>
                    <InputMask
                      name="cnic"
                      className={`form-control ${
                        errors.cnic && "border border-danger"
                      }`}
                      mask="99999-9999999-9"
                      {...register("cnic")}
                    ></InputMask>
                    <small className="text-danger">
                      {errors.cnic?.message}
                    </small>
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="address">Address</label>
                    <textarea
                      className="form-control"
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Enter Address"
                      {...register("address")}
                      style={{
                        border: errors.address ? "1px solid red" : "",
                      }}
                    />
                    <small className="text-danger">
                      {errors.address?.message}
                    </small>
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="attachment"></label>
                    <input
                      type="file"
                      name="attachment"
                      id="attachment"
                      className={`form-control ${
                        errors.attachment && "border border-danger"
                      }`}
                      onChange={(e) => console.log(getValues("attachment"))}
                      {...register("attachment")}
                      styles={{ border: errors.attachment && "1px solid red" }}
                    />
                    <small className="text-danger">
                      {errors.attachment?.message}
                    </small>
                  </div>
                  <div className="form-group my-2">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="start_date">Starting</label>
                          <input
                            type="date"
                            className="form-control"
                            name="start_date"
                            id="start_date"
                            {...register("start_date")}
                            style={{
                              border: errors.start_date && "1px solid red",
                            }}
                          />
                          <small className="text-danger">
                            {errors.start_date?.message}
                          </small>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="end_date">Ending</label>
                          <input
                            type="date"
                            className="form-control"
                            name="end_date"
                            id="end_date"
                            {...register("end_date")}
                            style={{
                              border: errors.end_date && "1px solid red",
                            }}
                          />
                          <small className="text-danger">
                            {errors.end_date?.message}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <input type="submit" className="btn btn-dark w-100 my-4" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallForm;
