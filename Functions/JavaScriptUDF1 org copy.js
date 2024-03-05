// Sample UDF which returns sum of two values.
function main(arg1) {
    
    let b_added = arg1.replace(/:/g, ',"b":');

    let a_added = b_added.replace(/\[/g, ',{"a":');

    let accolade_added = a_added.replace(/]/g, "}");

    let shortened = accolade_added.substring(2);

    let arrayed = "[".concat(shortened, "]");

    let result = JSON.parse(arrayed);
    
	return result;
}