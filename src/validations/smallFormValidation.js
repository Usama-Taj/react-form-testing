import * as yup from "yup";
export const smallFormSchema = yup.object().shape({
  name: yup.string().required("Enter Name"),
  fathername: yup.string().required("Enter Father Name"),
  country: yup.object().required("Select Country").nullable(),
  city: yup
    .array()
    .required("Select City")
    .min(1, "Select City")
    .of(
      yup.object().shape({
        // label: yup.string().required("Select City"),
        value: yup.string().required("Select City"),
      })
    ),
  phone: yup
    .string()
    .required("Enter Number")
    .matches(/^[0-9]+$/, "Must be only Digits")
    .min(10, "Phone Number Should have 10 numbers")
    .max(10, "Phone Number Should have 10 numbers"),
  cnic: yup
    .string()
    .test(
      "len",
      "Enter Complete CNIC",
      (val) => val.replaceAll("_", "").replaceAll("-", "").length === 13
    ),
  bank_balance: yup.string().required("Enter Bank Balance"),
  address: yup.string().required("Enter Your Address"),
  attachment: yup
    .mixed()
    .test("len", "Please Provide File", (value) => value && value.length > 0)
    .test("fileSize", "File Size Should be less than 1MB", (value) => {
      // console.log(value);
      // console.log(value[0] && value[0].size);
      return value[0] && value[0].size < 1000000;
    })
    .test(
      "fileType",
      "We Only accept File type of PNG, JPG, JPEG",
      (value) =>
        value[0] &&
        (value[0].type === "image/jpeg" ||
          value[0].type === "image/jpg" ||
          value[0].type === "image/png")
    ),
  start_date: yup.date().typeError("Enter Starting Time"),
  end_date: yup
    .date()
    .typeError("Enter Ending Time")
    .min(yup.ref("start_date"), "End date can't be before start date"),
});
