





function tellFortune ( number_of_children, partner_name, geographic_location, job_title)
{
    var fortune= 'You will be a ' +job_title +' in ' + geographic_location+ ', and married to ' +partner_name+ ' with ' +number_of_children+' kids';

    
var fortuneArray = [
  "You will have a bright future",
  "You will accomplish a lot in life",
  "You will be Millionaire",
];


console.log(fortune);
console.log(fortuneArray[Math.floor(Math.random() * fortuneArray.length)]);



}

tellFortune('5','Nimmi','chennai', 'CEO');
tellFortune("2", "Daisy", "France", "Designer");
tellFortune("3", "sansa", "canada", "Singer");
