import { Triangle } from './triangle';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {
  $("#userinput").submit(function(event){
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    var output = Triangle(side1, side2, side3);
    $("#triangleoutput").text(output);
    event.preventDefault();
  });
});
