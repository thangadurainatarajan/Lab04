var CustomerName = prompt ('Can I have the name for the order?');
console.log ('Customer Name : ',CustomerName);
if (CustomerName === ''){
    CustomerName = 'Loyal Customer';
}
alert('Hi '+ CustomerName +'! Welcome to the Coffeebucks!!!');
var Askfor_order = prompt ('Are you ready to order(Yes/No)?');
console.log ('Order (Yes/No) : ', Askfor_order);
if (Askfor_order === 'Yes' || Askfor_order === 'Y' || Askfor_order === 'y' || Askfor_order === 'yes') 
{
    var drink_order = prompt ('What do you like to drink today?');
    console.log ('drink : ', drink_order);
                       var Askfor_other_order = prompt ('What else you would like to order today?');
        other_order = Askfor_other_order;
        console.log ('other_order : ', other_order);

    if (drink_order != '' && other_order === '')
    {
    alert('Hi '+ CustomerName +'! Thanks for your '+ drink_order +' order, You can pick up your order in 10 mins .'  );     
}
else if (drink_order != '' && other_order != '')
{
alert('Hi '+ CustomerName +'! Thanks for your '+ drink_order +' and '+ other_order +'  order, You can pick up your order in 10 mins .'  ); 
}
  }  
  else              
  alert('Hi '+ CustomerName +'! Thanks for visiting us!! .'  );