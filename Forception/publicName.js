var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
function forception(peoples,alphabets){
    var tesla = []
    for(var i = 0;i<peoples.length;i++){
        tesla.push(peoples[i])
        for(var j=0; j<alphabets.length;j++){
            tesla.push(alphabets[j])
         
        }

    }
    return tesla
}
console.log(forception(people,alphabet))

// var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
// var alphabet = "abcdefghijklmnopqrstuvwxyz"

// function forception(people,alphabet){
//     var presque = []
//     for(var i = 0; i< people.length; i++){
//         presque.push(people[i])
//         for(var j=0; j< alphabet.length; j++){
//             presque.push(alphabet[j])
            
//         }return presque
        
//     }
//     console.log(forception(people,alphabet))
// }



