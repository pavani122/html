function largest()
{
let first=document.getElementById("1").value;
let second=document.getElementById("2").value;
let third=document.getElementById("3").value;

if(first>second && first>third)
document.getElementById('largestNumber').innerHTML=alert("largest element is: "+first);

else if(second>first && second>third)
document.getElementById('largestNumber').innerHTML=alert("largest element is: "+second);

else
document.getElementById('largestNumber').innerHTML=alert("largest element is: "+third);
}
