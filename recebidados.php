<?php 
	//Função de valiação de CPF
	function validar_cpf($cpf){
		// Extrai somente os números
		$cpf = preg_replace( '/[^0-9]/is', '', $cpf );
		 
		// Verifica se foi informado todos os digitos corretamente
		if (strlen($cpf) != 11) {
			return false;
		}
		// Verifica se foi informada uma sequência de digitos repetidos. Ex: 111.111.111-11
		if (preg_match('/(\d)\1{10}/', $cpf)) {
			return false;
		}
		// Faz o calculo para validar o CPF
		for ($t = 9; $t < 11; $t++){
			for ($d = 0, $c = 0; $c < $t; $c++) {
				$d += $cpf{$c} * (($t + 1) - $c);
			}
			$d = ((10 * $d) % 11) % 10;
			if ($cpf{$c} != $d) {
				return false;
			}
		}
		return true;
	}
	
	if(validar_cpf($_POST['cpf']) == true){
		if($_POST['local'] == 0){
			echo "<script>alert('Local Inválido, Tente Novamente!');</script>";
			echo "<script>window.location.href = 'index.php'; </script>";
		}else{
			echo 'Posto: ';
			echo $_POST['local'];
			echo '<br>';
			echo 'Nome: ';
			echo $_POST['nome'];
			echo '<br>';
			echo 'Data: ';
			echo $_POST['data'];
			echo '<br>';
			echo 'Telefone: ';
			echo $_POST['txttelefone'];
			echo '<br>';
			echo 'CPF: ';
			echo $_POST['cpf'];
			echo '<br>';
			echo 'Email: ';
			echo $_POST['email'];
			echo '<br>';
		}
	}else{
		echo "<script>alert('CPF Inválido, Tente Novamente!');</script>";
		echo "<script>window.location.href = 'index.php'; </script>";
	}
?>