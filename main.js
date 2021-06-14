var number_of_people=[];

function submit()
{
    var GuestName=document.getElementById("name1").value;
    number_of_people.push(GuestName);
    console.log(number_of_people);
    document.getElementById("GuestName").innerHTML=number_of_people;
}
function show()
{
    var display_guest_list_array=[];
    var length_of_the_number_of_people_array=number_of_people.length;
    console.log(length_of_the_number_of_people_array);

    for(var k=0; k<length_of_the_number_of_people_array; k++)
    {
        display_guest_list_array.push("<h4> "+number_of_people[k] + "</h4>");
        console.log(display_guest_list_array);
    }

    var remove_commas=display_guest_list_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name").innerHTML=remove_commas;
}
function sorting()
 {
    number_of_people.sort();
    console.log(number_of_people);

    var display_guest_sorted_list_array=[];

    var length_of_the_number_of_people_array=number_of_people.length;
    console.log(length_of_the_number_of_people_array);

    for(var k=0; k<length_of_the_number_of_people_array; k++)
    {
        display_guest_sorted_list_array.push("<h4> "+number_of_people[k] + "</h4>");
        console.log(display_guest_sorted_list_array);
    }

    display_guest_sorted_list_array.sort();
    console.log(display_guest_sorted_list_array);

    var remove_commas=display_guest_sorted_list_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_sorted").innerHTML=remove_commas;
 }
 function searching()
 {
     var s=document.getElementById("name1").value;
     var found=0;
     var j;
     for(j=0;j<number_of_people.length;j++)
     {
         if(s==number_of_people[j]){
             found=found+1;
         }
     }
     document.getElementById("error").innerHTML="name found"+found+"time/s";
     console.log("name found"+found+"time/s");
 }