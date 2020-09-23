export default (event) => {
 const value = event.target.value;
 const input = event.target.name;
 return { value, input };
};