$(document).ready(function(){
	maskCPFCNPJ();
	maskCNPJ();
	maskCPF();
	maskTelefone();
	maskCEP();
	protocoloouvidoria();
});

function maskCEP(){	
	$(".maskCEP").blur(function(){		
		var length = $(this).val().length;
		if(length < 9){
			$(this).val('');	
		}
	}).mask("00000-000", {
	    onKeyPress: function (cep, ev, el, op) {
	        el.mask('00000-000', op);
	    }
	});	
}

function maskCNPJ(){
	$(".maskCNPJ").blur(function(){
		var length = $(this).val().length;
		if(length < 18){
			$(this).val('');	
		}
	}).mask("00.000.000/0000-00", {
	    onKeyPress: function (cnpj, ev, el, op) {
	        el.mask('00.000.000/0000-00', op);
	    }
	});	
}

function protocoloouvidoria(){
	$(".protocoloouvidoria").blur(function(){
		var length = $(this).val().length;
		if(length < 13){
			console.log("protocolo invalido.");
		}
	}).mask("000000-000000", {
	    onKeyPress: function (cnpj, ev, el, op) {
	        el.mask('000000-000000', op);
	    }
	});	
}

function maskCPFCNPJ(){
	$(".maskCPFCNPJ").blur(function(){
		var length = $(this).val().length;
		if(length < 14 || (length > 14 && length < 18)){
			$(this).val('');	
		}
	}).mask("00.000.000-000", {
	    onKeyPress: function (cpf, ev, el, op) {
	        var masks = ['000.000.000-000', '00.000.000/0000-00'],
	            mask = (cpf.length > 14) ? masks[1] : masks[0];
	        el.mask(mask, op);
	    }
	});	
}

function maskTelefone(){
	var SPMaskBehavior = function (val) {
	  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
	},
	spOptions = {
	  onKeyPress: function(val, e, field, options) {
	      field.mask(SPMaskBehavior.apply({}, arguments), options);
	    }
	};

	$(".maskTelefone").blur(function(){
		if($(this).val().length < 14){
			$(this).val('');
		}
	}).mask(SPMaskBehavior, spOptions);
}

function maskCPF(){
	$(".maskCPF").blur(function(){
		var length = $(this).val().length;
		if(length < 14){
			$(this).val('');	
		}
	}).mask("00.000.000-00", {
	    onKeyPress: function (cpf, ev, el, op) {
	        var masks = ['000.000.000-00'],
	            mask = masks[0];
	        el.mask(mask, op);
	    }
	});	
}