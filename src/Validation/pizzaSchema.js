import * as yup from "yup";

const pizzaSchema = yup.object().shape({
    name: yup.string().required('Order name is required').min(2, 'name must be at least 2 characters'),
    size: yup.string().oneOf(['small', 'medium', 'large', 'XL'], 'Please select a size for your pizza'),
    sauce: yup.string().oneOf(['original red', 'garlic ranch', 'bbq sauce', 'spinach alfredo'], 'Please select a sauce for your pizza'),
    pepperoni: yup.string(),
    bacon: yup.string(),
    sausage: yup.string(),
    meatballs: yup.string(),
    special: yup.string(),
})

export default pizzaSchema;