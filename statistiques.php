<?php
$con=mysqli_connect("localhost","root","","bdabdallah");
$p=$_POST["pilote"]; 
if ($p==1)
    $req="select nom, prenom, marque, sum(duree),count(matricule) from pilote p, avion a, vol v where a.idavion=v.idavion and p.matricule=v.matpilote and matricule='$a' group by marque ";
$r=mysql_query($req);
if(mysql_num_rows!=0)
 {
  while($t=mysql_fetch_array($r)){
   echo $t[0]."  ".$t[1]." a effectué les vols suivants: : <br>".$t[2]."  ".$t[3]."  ".$t[4]."<br><br>";
   }
   }











?>