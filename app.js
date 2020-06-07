

 $('.alert').alert("dfdsfdsfdsfdsfdsfdsfdsfds");
Swal.fire("swal is running from external js file");
alert("hello");
function myfunc() {
    alert("sss");


   

    Swal.fire("swal is running from external js file inside function");
    // Swal.fire("swal is running from external js file");


    

    // swal.fire({
    //     title: "Authenicating for continuation",
    //     text: "Test",
    //     type: "input",
    //     showCancelButton: true,
    //     closeOnConfirm: false,
    //     animation: "slide-from-top",
    //     inputPlaceholder: "Write something"
    //   }, function(inputValue) {
    //     if (inputValue === false) return false;
    //     if (inputValue === "") {
    //       swal.showInputError("You need to write something!");
    //       return false
    //     }
    //     // swal("Nice!", "You wrote: " + inputValue, "success");
    //   });
    





    // swal.fire({
    //     title: 'Multiple inputs',
    //     showCancelButton: true,
    //     html:
    //       '<input id="swal-input1" class="swal2-input">' +
    //       '<input id="swal-input2" class="swal2-input">',
    //     preConfirm: function () {
    //       return new Promise(function (resolve) {
    //         resolve([
    //           $('#swal-input1').val(),
    //           $('#swal-input2').val()
    //         ])
    //       })
    //     },
    //     onOpen: function () {
    //       $('#swal-input1').focus()
    //     }
    //   }).then(function (result) {
    //     swal(JSON.stringify(result))
    //   }).catch(swal.noop)
      
}
