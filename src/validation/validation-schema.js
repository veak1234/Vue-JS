
import * as yup from "yup";

export const categorySchema = yup.object({
    name: yup
        .string()
        .required("This Field is required")
        .min(3, "This field must be at least 3 characters"),
    description: yup.string().required("This Field is required"),
});

export const categorySchemaProduct = yup.object({
    name: yup
       .string()
       .required("This Field is required")
       .min(3, "This field must be at least 3 characters"),
    product_id: yup
        .string()
        .required("This Field is required")
        .min(1, " This field must be at least"),
    description: yup
        .string()
        .required("This Field is required")
        .min(5, "This field must be at least 5 characters"),
});

export const userSchema = yup.object({
    username: yup
       .string()
       .required("This Field is required")
       .min(3, "This field must be at least 3 characters"),
    age: yup
        .number()
        .required("This Field is required")
        .min(18),
    email: yup
       .string()
       .required("This Field is required")
       .min(3, "This field must be at least 3 characters"),
    password: yup
       .string()
       .required("This Field is required")
       .min(4),
    confirmPassword: yup
        .string()
        .required("This Field is required")
        .oneOf([yup
        .ref('password'), null], 'Passwords must match')
})
