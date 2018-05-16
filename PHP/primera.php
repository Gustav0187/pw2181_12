<?php
$p1 = $_GET["parametro1"];
	for ($i=0; $i < 10; $i++) { 
		print("Hola PHP "." ".$i."<br>");
	}
?>
<html lang="es">
<head>
	<title>Primer Pagina con PHP</title>
</head>
<body>
	<?php print($p1); ?>
</body>
</html>