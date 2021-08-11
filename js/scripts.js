$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const seasonInput = $("#season").val();
    const petInput = $("input:radio[name=pet]:checked").val();
    const DOBInput = $("#DOB").val();
    const shirtInput = $("#shirt").val();

    $(".name").text(nameInput);
    $(".season").text(seasonInput);
    $(".pet").text(petInput);
    $(".DOB").text(DOBInput);
    $(".shirt").text("this color").css("color", shirtInput);
   
    $("#response").show();
  })
})





// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     event.preventDefault();
//     const name = $("input#person1").val();
//     const person2Input = $("input#person2").val();
//     const animalInput= $("input#animal").val();
//     const exclamationInput = $("input#exclamation").val();
//     const verbInput = $("input#verb").val();
//     const nounInput = $("input#noun").val();

//     $(".person1").text(person1Input);
//     $(".person2").text(person2Input);
//     $(".animal").text(animalInput);
//     $(".exclamation").text(exclamationInput);
//     $(".verb").text(verbInput);
//     $(".noun").text(nounInput);

//     $("#story").show();
//   });
// });

// const flavor = $("input:radio[name=flavor]:checked").val();