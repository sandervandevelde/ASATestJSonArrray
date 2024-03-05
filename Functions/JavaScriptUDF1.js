// Sample UDF which returns sum of two values.
function main(arg1) {
    
    let shortened = arg1.substring(1);

    let answer = '';

    let arr = shortened.split(']');

    arr.forEach((item) => {

        if (item == '') return;

        let arrshort = item.split(':');
        let index = 1;
        
        answer = answer + ',{';
        
        arrshort.forEach((element) => { 
            element = element.replace('[', '');
            element = element.replace(']', '');
            
            if (index != 1) {
                answer = answer + ',';
            }
            
            answer = answer + '"e' + index++ + '":"' + element + '"'; 
        });
        
        answer = answer + '}';
    });

    answer = answer.substring(1);

    answer = '[' + answer + ']';

    let result = JSON.parse(answer);
    
	return result;
}