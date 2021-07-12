$(document).ready(function (e){
	
	$("#checkform").submit(function (e1)
		{
			e1.preventDefault();
			e1.stopImmediatePropagation();
			var image=$("#checkform")[0];
			var form= {"name":$("#name").val(),"email":$("#email").val(),"message":$("#message").val()}	;
		 var formdata=new FormData(image);
		 formdata.append("Jsondata",JSON.stringify(form));	   
        $.ajax({
			url: "/",	
			type: 'POST', 		
			data: formdata,
      		enctype: 'multipart/form-data',
      		processData: false,  
			  contentType: false,  			  
            success: function(response) {
                alert(response.message);
            },error: function(jqXHR) {
                console.log(jqXHR);
            }
		  });
	
	    });

});

	
	