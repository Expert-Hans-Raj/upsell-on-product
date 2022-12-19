$(document).ready(function(){
$("input.color_variants").click(function(event){
  event.preventDefault();
var variants_img = $(this).parent('.swatch-element').find('img').attr('src');
$(this).parent().parent().parent().parent().parent().find('.card-wrapper').find('.card--media').find('.card__media').find('.media--transparent').html('<img src='+variants_img+'>');
});


$("input.size_variants").click(function(event){
  event.preventDefault();
var product_ID = $(this).attr('data-id');
console.log('product_ID',product_ID);

  jQuery.ajax({
            type: 'POST',
            url: '/cart/add.js',
            data:{id:product_ID,quantity: 1
                },
            dataType: 'json',
            success: function(data) {
                  console.log('successfully');
       
            },
          });
});
  //product page frequently_bought products

  $(".custom-add-cart-frequently_bought").click(function(event){
      

 event.preventDefault();
var parent_class = $(this).parent();
 var parent_id = $(this).parent().parent().find('.frequently_bought').val();
 console.log(parent_id);

  $.ajax({
            type:'POST',
            url: '/cart/add.js',
            dataType:'json',
            data: {
              "quantity": 1,
              "id":parent_id
            }, 
       beforeSend: function(){
            // Show image container
            
         parent_class.find("svg").show();
           },
            success: function() {
                // Hide image container
                $("svg.loader_custom").hide();
               parent_class.find(".cart-added-succes").show();
           $.ajax({
                type: 'GET',
                url: '/cart',
                dataType: 'html',
                success: function(data) {
 


                },
              });
            }

          });
});
});
