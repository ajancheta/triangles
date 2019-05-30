import { Triangle } from './triangle.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {
  $("#userinput").submit(function(event){
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    console.log("here");
    var output = new Triangle(side1, side2, side3);
    console.log("not here");
    $("#triangleoutput").text(output.checkType());
  });
});
