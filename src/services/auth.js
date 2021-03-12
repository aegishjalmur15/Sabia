export const header= {
    headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`},
}
export const bodyParameters = {
    key: "value"
 };