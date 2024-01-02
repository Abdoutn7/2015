<?php
$con=mysqli_connect("localhost","root","","bdabdallah");
$mat=$_POST["mat"];
$nom=$_POST["nom"];
$prenom=$_POST["prenom"];
$genre=$_POST["g"];
$email=$_POST["email"];
$req="INSERT INTO pilote values('$mat','$nom','$prenom','$genre','$email')";
if (mysqli_query($con,$req)==true) {
    echo"saye";
    
}
else {
    echo"le";
};
mysqli_close($con);


?>
