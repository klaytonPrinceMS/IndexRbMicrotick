/*
======================================================================
==                        T! SOS Sistemas                           ==
======================================================================
== Responsável técnico: Klayton Bueno Prince, Analista de  Sistemas ==
== com  especialisação  em Segurança  da Informação, com  enfase em ==
== Segurança de redes: Roteadores de borda, como serviço para PME's ==
== e usúarios domésticos                                            ==
======================================================================
*/
//Variaveis de imagens
var imgKbpProp1="zArquivos/img/KbpProp1.png"
var imgKbpProp2="zArquivos/img/KbpProp2.png"
var imgKbpProp3="zArquivos/img/KbpProp3.png"
var imgKbpProp4="zArquivos/img/KbpProp4.png"
var imgKbpProp5="zArquivos/img/KbpProp5.png"
var papelParede1="zArquivos/img/kbp1.png"
var papelParede2="zArquivos/img/kbp2.jpg"
var papelParede3="zArquivos/img/kbp3.jpg"
var imgLogo="zArquivos/img/pngLogo.png"  //imagem que vai na pagina de logim, logo da empresa
var menuLogo="zArquivos/img/pngMenu.png" //imagem que vai no menu flutuante
//Variaveis do Papel de Parede
var duracaoPermanenciaPapelParede=4000
var duracaoTransicaoPapelParede=800
var centralizarVerticalPapelParede=true
var centralizarHorizontalPapelParede=true
//Variaveis menu-Flutuante
var logo = true  //true vai mostrar imagem menulogo / false vai mostrar menuNome
var menuNome="T! SOS Sistemas"
var menuAcesso="ACESSO"
var menuContratante="SUA EMPRESA AQUI"
var menuTiSos="SOBRE WIFI-SOCIAL"
//Variaveis da T! SOS Sistemas
var tiSosNomeEndereco="T! SOS Sistemas"
var tiSosDescricaoEndereco="Wi-fi Social • Propaganda Direcionada"
var tiSosCidadeEstadoBairroEndereco="Guaxupé MG - Jardim Alvorada"
var tiSosRuaNumeroCep="Rua: Sebastiana Tavares Tobias 87 - CEP: 37800-000"
var tiSosCnpjCpf="XXXXXXXXX"
var tiSosTelefone="+55 359 8818-3288  <br>"
var tiSosWhatsapp="+55 359 9180-1835"
var tiZap="5535991801835"
var tiZapTexto="Olá gostaria de ter mais informações sobre o WI-FI Social"
var tiSosEmail="tisossistemas@gmail.com"
var tiSosSite="http://tisossistemas.wix.com/home"
var direitosAutorais="2019 By KBP "
//Variaveis do contratante
var tiContratanteNomeEndereco="Sua Empresa Aqui"
var tiContratanteDescricaoEndereco="O que você vende?"
var tiContratanteCidadeEstadoBairroEndereco="Qual sua cidade e bairro?"
var tiContratanteRuaNumeroCep="Em qual rua te encontro?"
var tiContratanteCnpjCpf="XXXXXXXXX"
var tiContratanteTelefone="Não sei seu telefone  <br>"
var tiContratanteWhatsapp="Não tenho seu Whatsapp"
var tiContratanteZap="5535991801835"
var tiContratanteZapTexto="Olá quero saber mais sobre sua empresa"
var tiContratanteEmail="seuemail@gmail.com"
var tiContratanteSite="http://seusite.com.br"
//Variaveis das paginas
//qualquer pagina
var politicaPrivacidade="Duvidas sobre as politica de privacidade utilizadas em nosso site acesse: ->Menu ->"+menuTiSos+" ->Licença"
//login
var pgLogin1="Paragrafo 1"
var pgLogin2="Paragrafo 2"
var pgLoginGoogle1="Deseja continuar o login usando os dados disponiveis na sua conta do Google."
var pgLoginGoogle2="pgLoginGoogle2"
var tituloLogin="LOGIN"
var btnLoginEmail="Liberar acesso"
var btnLoginSemCadastro="Acesso sem cadastro"
var btnLoginWhatsapp="Acesso usando Whatsapp"
var btnLoginTeste="Acesso Teste"
//zTisosSobre
var pgzTisosSobreLetraCapital="S"
var pgzTisosSobreTextoCapital="obre a <strong>T! SOS Sistemas</strong>"
var pgzTisosSobreDescrever="Preocupado com a segurança dos dados de nossos amigos, nasceu em 2005 a <em><strong>T! SOS Sistemas</strong></em>, somos especializados em segurança da informação, disponibilizamos inumeros serviços de <abbr title='Tecnologia da informação'>TI</abbr>"
var pgzTisosSobreServicos="Alguns dos serviços disponíveis"
var pgzTisosSobreLinhas="<li> WI-FI Social </li><li> Propaganda direcionada </li><li> Formatação de computadores </li><li> Recuperação de arquivos apagados </li><li> Cursos </li><li> Palestras </li><li> Workshop </li>"
var pgzTisosSobreParagrafo1=""
var pgzTisosSobreParagrafo2=""
//zTisosLicenca
var pgzTisosLicencaLetraCapital="L"
var pgzTisosLicencaTextoCapital="icença de uso"
var pgzTisosLicencaContratado="A MEI "+tiSosNomeEndereco+", com sede no endereço "+tiSosRuaNumeroCep+", inscrita no CPF/CNPJ sob o número "+tiSosCnpjCpf+", doravante denominada “<abbr title='"+tiSosNomeEndereco+"'><strong>CONTRATADO</strong></abbr>”, neste ato representado na forma deste contrato."
var pgzTisosLicencaContratante="A "+tiContratanteNomeEndereco+", com sede no endereço "+tiContratanteRuaNumeroCep+" inscrita no CPF/CNPJ sob o número "+tiContratanteCnpjCpf+", doravante denominada <abbr title='"+tiContratanteNomeEndereco+"'><strong>CONTRATANTE</strong></abbr>."
var pgzTisosLicenca1="O <abbr title='"+tiSosNomeEndereco+"'><strong>CONTRATADO</strong></abbr> não é provedor de internet, sendo assim não pode ser responsabilidade pela instabilidade da conexão contratada com os provedores de internet."
var pgzTisosLicenca2="A segurança dos dados trafegados nesta rede, são apenas para equipamentos do <abbr title='"+tiContratanteNomeEndereco+"'><strong>CONTRATANTE</strong></abbr>, sendo os demais usuarios responsaveis pela segurança de seus equipamentos, para tanto recomenda-se o uso de antivirus."
var pgzTisosLicenca3="A gestão da infraestrutura da Rede Wi-Fi <abbr title='T! SOS Sistemas'><strong>T! SOS</strong></abbr> é de responsabilidade do <abbr title='"+tiSosNomeEndereco+"'><strong>CONTRATADO</strong></abbr> que estabelece o bom funcionamento, mediante os critérios das regras de acesso definidas pelo <abbr title='"+tiContratanteNomeEndereco+"'><strong>CONTRATANTE</strong></abbr> e principalmente baseadas na lei <abbr title='Marco Civil da Internet'><strong> N° 12.965/14</strong></abbr>."
var pgzTisosLicenca4="O USÚARIO da rede ao acessar, reconhece e concorda que o <abbr title='"+tiContratanteNomeEndereco+"'><strong>CONTRATANTE</strong></abbr> e o <abbr title='T! SOS Sistemas'><strong>CONTRADADO</strong></abbr> não endossam o contéudo de quaisquer comunicações de usúarios, conforme disposto nas leis vigentes, e que não fica o CONTRATANTE e o <abbr title='"+tiSosNomeEndereco+"'><strong>CONTRATADO</strong></abbr> responsáveis por qualquer material ilegal, difamatório, que viole direitos de privacidade, ou que seja abusivo, ameaçador, obsceno, injurioso ou censurável de qualquer forma ou possa infringir direitos de propriedade intelectual ou outros direitos de terceiros, sendo assim qualquer violação destes, serão repassados as autoridades competentes para demais providencias cabiveis quando solicitado por ordem judicial."
var pgzTisosLicenca5="O USÚARIO autoriza o <abbr title='"+tiSosNomeEndereco+"'><strong>CONTRATADO</strong></abbr> a monitorar seu acesso e sua navegação na rede mundial de internet para os fins exclusivos em decisões judiciais, e autoriza captura de dados como E-mail, Telefone e ou Whatsapp para identificar grupos e perfil de usuários para orientação publicitaria uma vez que a navegaçaão será liberada apenas para pessoas que concordem em receber propaganda de todos os <abbr title='Todos os clientes da T! SOS'><strong>CONTRATANTES</strong></abbr> do <abbr title='T! SOS Sistemas'><strong>CONTRATADO</strong></abbr>"
//pgzSnaSobre
var pgzSnaSobreLetraCapital="S"
var pgzSnaSobreTextoCapital="obre "+tiContratanteNomeEndereco
var pgzSnaSobreParagrafo1="Disponibilize wi-fi grátis para seus clientes e amigos, realize Marketing Cultural e coloque nesta página informações sobre a sua empresa."
var pgzSnaSobreParagrafo2="Todo conhecimento é válido e toda forma de cultura é bem-vinda, então, por que não Marketing Cultural? De uma maneira simplificada, Marketing Cultural é toda ação de marketing que usa cultura como forma de veiculação, seja para fixar uma marca, um produto ou uma empresa."
var pgzSnaSobreParagrafo3="Esse tipo de marketing vem ganhando força no meio empresarial porque apresenta soluções a três novas exigências do mercado: necessidade de diferenciação das marcas; diversificação do mix de comunicação das empresas para melhor atingir seu público; e a necessidade das empresas se posicionarem como socialmente responsáveis."
var pgzSnaSobreParagrafo4="No momento em que uma empresa faz uma ação de marketing usando como ferramenta a cultura, ela está fazendo Marketing Cultural, mas nem sempre o patrocínio vem em forma de dinheiro, pode ser uma permuta por passagens áreas (companhias aéreas), estadia (hotéis) ou refeições (restaurantes), mas o importante é que a ação de marketing deve se encaixar perfeitamente ao perfil da empresa, ao público alvo e ao objetivo buscado. Sem equalizar esses três quesitos, público alvo; identidade e objetivos,fica difícil garantir a eficácia da ação."
var pgzSnaSobreParagrafo5="Paragrafo."
var pgzSnaSobreParagrafo6="Paragrafo."
//pgzSnaServico
var pgzSnaServicoLetraCapital="S"
var pgzSnaServicoTextoCapital="erviços"
var pgzSnaServico="Alguns dos serviços disponíveis."
var pgzSnaServicoLinhas="<li> Qual o seu legado? </li><li> Qual seu objetivo? </li><li> O quê você vende? </li><li> Como seu cliente vê você? </li><li> Quanto você custa? </li><li> Você têm diferencial? </li><li> Você já chegou onde deseja? </li>"
var pgzSnaServicoParagrafo1="Paragrafo."
var pgzSnaServicoParagrafo2="Paragrafo."
var pgzSnaServicoParagrafo3="Paragrafo."
var pgzSnaServicoParagrafo4="Paragrafo."
//twitterURL deve ser transformada em urlencoder
var twitterURL ="http://tisossistemas.wixsite.com/home"
var twitterTexto ="T! SOS Sistemas é sua melhor opção em Segurança da Informação"
var twitterHastags ="segInfo,WifiSocial,TiSOSsistemas"
//funções kbp
var link2="https://twitter.com/intent/tweet?url="+twitterURL+"&text="+twitterTexto+"&hashtags="+twitterHastags
var link1="$(link-login-only)?dst=$(link-orig-esc)&amp;username=T-$(mac-esc)"






function kbpEnderecoContratante(){
    document.write(
    "    <div class='container'>"
    +"        <div class='col-md-12'>"
    +"            <div class='ice_contact'>"
    +"                <div class='custom, text-justify'>"
    +"                    <ul>"
    +"                        <li>"
    +"                          "+tiContratanteNomeEndereco
    +"                            <br>"+tiContratanteDescricaoEndereco
    +"                            <br><i class='fa fa-check-square'></i> "+tiContratanteCidadeEstadoBairroEndereco
    +"                            <br><i class='fa fa-map-marker'></i> "+tiContratanteRuaNumeroCep
    +"                            <br><i class='fa fa-phone'></i> "+tiContratanteTelefone
    +"                            <i class='fab fa-whatsapp'></i> "+tiContratanteWhatsapp
    +"                            <br><i class='fa fa-envelope'></i> <a href='mailto:"+tiContratanteEmail+"'>Entre em contato</a> <a href='"+tiContratanteSite+"' target='_blank'> ou acesse nosso site</a>"
    +"                        </li>"
    +"                    </ul>"
    +"                </div>"
    +"            </div>"
    +"        </div>"
    +"    </div>"
    )
}//fim kbpEnderecoTISOS()
function kbpEnderecoTISOS(){
    document.write(
    "    <div class='container'>"
    +"        <div class='col-md-12'>"
    +"            <div class='ice_contact'>"
    +"                <div class='custom, text-justify'>"
    +"                    <ul>"
    +"                        <li>"
    +"                          "+tiSosNomeEndereco
    +"                            <br>"+tiSosDescricaoEndereco
    +"                            <br><i class='fa fa-check-square'></i> "+tiSosCidadeEstadoBairroEndereco
    +"                            <br><i class='fa fa-map-marker'></i> "+tiSosRuaNumeroCep
    +"                            <br><i class='fa fa-phone'></i> "+tiSosTelefone
    +"                            <i class='fab fa-whatsapp'></i> "+tiSosWhatsapp
    +"                            <br><i class='fa fa-envelope'></i> <a href='mailto:"+tiSosEmail+"'>Entre em contato</a> <a href='"+tiSosSite+"' target='_blank'> ou acesse nosso site</a>"
    +"                        </li>"
    +"                    </ul>"
    +"                </div>"
    +"            </div>"
    +"        </div>"
    +"    </div>"
    )
}//fim kbpEnderecoTISOS()
function kbpRodaPe(){
    document.write(
    "    <div class='footer '>"
    +"        <div class='container, text-center'>"
    +"            <p class='text-muted'>"
    +"            <br>COPYRIGHT <i class='fa fa-copyright'></i> "+direitosAutorais+"<br>"
    +"            </p>"
    +"        </div>"
    +"    </div>"
    )
}//fim kbpRodaPe()
function kbpPapelDeParede(){
        $.backstretch([
        papelParede1,papelParede1,papelParede1,papelParede1,papelParede2,papelParede3
        ], {
        fade: duracaoTransicaoPapelParede,
        duration: duracaoPermanenciaPapelParede,
        centeredX: centralizarHorizontalPapelParede,
        centeredY: centralizarVerticalPapelParede
        });
}//fim kbpPapelParede()
function kbpMenuFlutuante(){
document.write(
"<nav class='navbar navbar-default navbar-static-top' role='navigation'>"
+"  <div class='container'>"
+"      <div class='navbar-header'>"
+"          <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>"
+"              <span class='sr-only'>Menu</span>"
+"              <span class='icon-bar'></span>"
+"              <span class='icon-bar'></span>"
+"              <span class='icon-bar'></span>"
+"          </button><div class='navbar-brand' style='margin-top:-10px;'><script>kbpMenuLogo();</script></div>"
+"      </div>"

+"      <div class='navbar-collapse collapse'>"
+"          <ul class='nav navbar-nav navbar-right'>"
+"              <li><a href='#' class='dropdown-toggle' data-toggle='dropdown' style='text-transform: uppercase;'><i class='fa fa-unlock-alt fa-fw'></i> <script> document.write(menuAcesso) </script> <span class='caret'></span></a>"
+"                  <ul class='dropdown-menu' role='menu'>"
+"                      <li><a href='login.html'><i class='fa fa-user'></i> Acesso com Voucher </a></li>"
+"                  </ul>"
+"              </li>"

+"              <li><a href='#' class='dropdown-toggle' data-toggle='dropdown' style='text-transform: uppercase;'><i class='fa fa-building fa-fw'></i> <script> document.write(menuContratante) </script> <span class='caret'></span></a>"
+"                  <ul class='dropdown-menu' role='menu'>"
+"                      <li><a href='zSnaServico.html'><i class='fa fa-cog'>&nbsp;Serviços</i></a></li>"
+"                      <li><a href='zSnaSobre.html'><i class='fa fa-info-circle'>&nbsp;Sobre </i></a></li>"
+"                  </ul>"
+"              </li>"

+"              <li><a href='#' class='dropdown-toggle' data-toggle='dropdown' style='text-transform: uppercase;'><i class='fa fa-exclamation-circle fa-fw'></i> <script> document.write(menuTiSos) </script> <span class='caret'></span></a>"
+"                  <ul class='dropdown-menu' role='menu'>"
+"                      <li><a href='zTisosLicenca.html'><i class='fa fa-gavel fa-fw'> Licença</i></a></li>"
+"                      <li><a href='zTisosSobre.html'> <i class='fa fa-exclamation-circle fa-fw'>&nbsp;T! SOS</i></a></li>"
+"                  </ul>"
+"              </li>"
+"          </ul>"
+"      </div>"
+"  </div>"
+"</nav>"
)
}//fim kbpMenuFlutuante()
function kbpMenuFlutuanteConectado(){
    document.write(
"   <div id='menuFlutuanteConectado' class='navbar navbar-default navbar-static-top' role='navigation'>"
+"		<div class='container'>"
+"			<div class='navbar-header'>"
+"				<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>"
+"					<span class='sr-only'>Toggle navigation</span>"
+"					<span class='icon-bar'></span>"
+"					<span class='icon-bar'></span>"
+"					<span class='icon-bar'></span>"
+"				</button>"
+"				<div class='navbar-brand' style='margin-top:-10px;'><img src='zArquivos/img/pngMenu.png' class='img-responsive' width='150'/></div>"
+"			</div>"
+"			<div class='navbar-collapse collapse'>"
+"				<ul class='nav navbar-nav navbar-right'>"
+"					<li class='dropdown'>"
+"						<a href='#' class='dropdown-toggle' data-toggle='dropdown' style='text-transform: uppercase;'><i class='fa fa-user fa-fw'></i>Status<span class='caret'></span></a>"
+"						<ul class='dropdown-menu' role='menu'>"
+"							<li><a href='status.html'><i class='fa fa-cog'>&nbsp;Status </i></a></li>"
+"							<li>"
+"								<script>"
+"									kbpWhatzapContratante()"
+"								</script>"
+"							</li>"
+"						</ul>"
+"					<li><a href='#' class='dropdown-toggle' data-toggle='dropdown' style='text-transform: uppercase;'><i class='fa fa-building fa-fw'></i> <script> document.write(menuContratante) </script> <span class='caret'></span></a>"
+"                      <ul class='dropdown-menu' role='menu'>"
+"		    				<li><a href='zSnaServico.html'><i class='fa fa-cog'>&nbsp;Serviços</i></a></li>"
+"							<li><a href='zSnaSobre.html'><i class='fa fa-info-circle'>&nbsp;Sobre </i></a></li>"
+"						</ul>"
+"					</li>"
+"					<li><a href='#' class='dropdown-toggle' data-toggle='dropdown' style='text-transform: uppercase;'><i class='fa fa-exclamation-circle fa-fw'></i> <script> document.write(menuTiSos) </script> <span class='caret'></span></a>"
+"						<ul class='dropdown-menu' role='menu'>"
+"							<li><a href='zTisosLicenca.html'><i class='fa fa-gavel fa-fw'> Licença</i></a></li>"
+"							<li><a href='zTisosSobre.html'> <i class='fa fa-exclamation-circle fa-fw'>&nbsp;T! SOS</i></a></li>"
+"							<li>"
+"								<script>"
+"									kbpWhatzapTISOS()"
+"								</script>"
+"							</li>"
+"						</ul>"
+"					</li>"
+"			</div><!--/.nav-collapse -->"
+"		</div>"
+"    </div>")
}//fim kbpMenuFlutuanteConectado()
function kbpEscreve(texto){
document.write(texto+"<br>")

}//fim kbpEscreve()
function kbpEscreveParagrafo(texto){
    document.write(
    "<p class='text-justify'>"+texto+"</p>"
    )
}//fim do kbpEscreveParagrafo()
function kbpEscreveLink(link, texto){
 document.write(
    "<a href='"+link+"'>"+texto+"</a>"
    )
}//fim do kbpEscreveLink()
function kbpEscreverTitulo(texto){
    document.write(
    "<title>"+texto+"</title>"
    )
}//fim kbpEscreverTitulo
function kbpWhatzapContratante(){
    document.write(
    "<a href='https://api.whatsapp.com/send?phone="+tiContratanteZap+"&text="+tiContratanteZapTexto+"'> <i class='fa fa-comments fa-fw'> Whatsapp</i></a>"
    )
}//fin kbpWhatzapTISOS()
function kbpWhatzapTISOS(){
    document.write(
    "<a href='https://api.whatsapp.com/send?phone="+tiZap+"&text="+tiZapTexto+"'> <i class='fa fa-comments fa-fw'> Whatsapp</i></a>"
    )
}//fin kbpWhatzapTISOS()
function kbpPropaganda(img1, img2, img3, img4, img5){
    document.write(
    "    <DIV id='KBPcarrossel'>"
    +"    <div id='myCarousel' class='carousel slide' data-ride='carousel'>"
    +"        <ol class='carousel-indicators'>"
    +"            <li data-target='#myCarousel' data-slide-to='0' class='active'></li>"
    +"            <li data-target='#myCarousel' data-slide-to='1'></li>"
    +"            <li data-target='#myCarousel' data-slide-to='2'></li>"
    +"            <li data-target='#myCarousel' data-slide-to='3'></li>"
    +"            <li data-target='#myCarousel' data-slide-to='4'></li>"
    +"        </ol>"
    +"        <div class='carousel-inner'>"
    +"                                    <div class='item active'>"
    +"                                        <img src='"+img1+"' alt='Propaganda'>"
    +"                                    </div>"
    +"                                    <div class='item'>"
    +"                                        <img src='"+img2+"' alt='Propaganda'>"
    +"                                    </div>"
    +"                                    <div class='item'>"
    +"                                        <img src='"+img3+"' alt='Propaganda'>"
    +"                                    </div>"
    +"                                    <div class='item'>"
    +"                                        <img src='"+img4+"' alt='Propaganda'>"
    +"                                    </div>"
    +"                                    <div class='item'>"
    +"                                        <img src='"+img5+"' alt='Propaganda'>"
    +"                                    </div>"
    +"        </div>"
    +"        <a class='left carousel-control' href='#myCarousel' data-slide='prev'>"
    +"                                    <span class='glyphicon glyphicon-chevron-left'></span>"
    +"                                    <span class='sr-only'>Anterior</span>"
    +"        </a>"
    +"        <a class='right carousel-control' href='#myCarousel' data-slide='next'>"
    +"                                    <span class='glyphicon glyphicon-chevron-right'></span>"
    +"                                    <span class='sr-only'>Próximo</span>"
    +"        </a>"
    +"    </div>"
    +" </DIV>"
    )
}//fin kbpPropaganda()
function kbpLoginContainerEsquerdo(){
    document.write(
    "    <img src="+imgLogo+" class='img-responsive'/>"
    +"    <script>"
    +"        kbpEscreveParagrafo(pgLogin1),"
    +"        kbpEscreveParagrafo(pgLogin2)"
    +"    </script>"

    )
}//fim pgloginContainerEsquerdo()
function kbpMenuLogo(){
    if (logo == true){
        document.write("<img src='"+menuLogo+"' class='img-responsive'/>")
    } else {
        document.write("<a href='#' class='navbar-brand ' >"+menuNome+"</a>")
    }
}//fim kbpMenuLogo



function kbpPoliticaGoogle(){
 document.write(
    "<a href='https://policies.google.com/privacy?hl=pt'>Politica de privacidade do Google</a>"
    )
}//fim do kbpEscreveLink()
function kbpFormTelefone(idPais, idDDD, idNumeroTelefone){
document.write(
       "  <select name='cdi' id="+idPais+" class='form-control' >"
       +"     <option value='+355'>Albânia</option><option value='+213'>Argélia</option><option value='+1'>Samoa Americana</option><option value='+376'>Andorra</option><option value='+244'>Angola</option><option value='+1'>Anguilla</option><option value='+1'>Antígua</option><option value='+54'>Argentina</option><option value='+374'>Armênia</option><option value='+297'>Aruba</option><option value='+61'>Austrália</option><option value='+43'>Áustria</option><option value='+994'>Azerbaijão</option><option value='+973'>Bahrein</option><option value='+880'>Bangladesh</option><option value='+1'>Barbados</option><option value='+375'>Belarus</option><option value='+32'>Bélgica</option><option value='+501'>Belize</option><option value='+229'>Benin</option><option value='+1'>Bermuda</option><option value='+975'>Butão</option><option value='+591'>Bolívia</option><option value='+599'>Bonaire, Santo Eustáquio e Saba</option><option value='+387'>Bósnia e Herzegovina</option><option value='+267'>Botsuana</option><option value='+55' selected>Brasil</option><option value='+246'>Território Britânico do Oceano Índico</option><option value='+1'>Ilhas Virgens Britânicas</option><option value='+673'>Brunei</option><option value='+359'>Bulgária</option><option value='+226'>Burkina Faso</option><option value='+257'>Burundi</option><option value='+855'>Camboja</option><option value='+237'>Camarões</option><option value='+1'>Canadá</option><option value='+238'>Cabo Verde</option><option value='+1'>Ilhas Cayman</option><option value='+236'>República Centro-Africana</option><option value='+235'>Chade</option><option value='+56'>Chile</option><option value='+86'>China</option><option value='+57'>Colômbia</option><option value='+269'>Comores</option><option value='+682'>Ilhas Cook</option><option value='+506'>Costa Rica</option><option value='+225'>Costa do Marfim</option><option value='+385'>Croácia</option><option value='+53'>Cuba</option><option value='+599'>Curaçao</option><option value='+357'>Chipre</option><option value='+420'>República Tcheca</option><option value='+243'>República Democrática do Congo</option><option value='+45'>Dinamarca</option><option value='+253'>Djibuti</option><option value='+1'>Dominica</option><option value='+1'>República Dominicana</option><option value='+593'>Equador</option><option value='+20'>Egito</option><option value='+503'>El Salvador</option><option value='+240'>Guiné Equatorial</option><option value='+291'>Eritreia</option><option value='+372'>Estônia</option><option value='+251'>Etiópia</option><option value='+500'>Ilhas Falkland</option><option value='+298'>Ilhas Faroés</option><option value='+691'>Estados Federados da Micronésia</option><option value='+679'>Fiji</option><option value='+358'>Finlândia</option><option value='+33'>França</option><option value='+594'>Guiana Francesa</option><option value='+689'>Polinésia Francesa</option><option value='+241'>Gabão</option><option value='+995'>Geórgia</option><option value='+49'>Alemanha</option><option value='+233'>Gana</option><option value='+350'>Gibraltar</option><option value='+30'>Grécia</option><option value='+299'>Groelândia</option><option value='+1'>Granada</option><option value='+590'>Guadalupe</option><option value='+1'>Guam</option><option value='+502'>Guatemala</option><option value='+44'>Guernsey</option><option value='+224'>Guiné</option><option value='+245'>Guiné-Bissau</option><option value='+592'>Guiana</option><option value='+509'>Haiti</option><option value='+504'>Honduras</option><option value='+852'>Hong Kong</option><option value='+36'>Hungria</option><option value='+354'>Islândia</option><option value='+91'>Índia</option><option value='+62'>Indonésia</option><option value='+98'>Irã</option><option value='+964'>Iraque</option><option value='+353'>Irlanda</option><option value='+44'>Ilha de Man</option><option value='+972'>Israel</option><option value='+39'>Itália</option><option value='+1'>Jamaica</option><option value='+81'>Japão</option><option value='+44'>Jersey</option><option value='+962'>Jordânia</option><option value='+7'>Cazaquistão</option><option value='+254'>Quênia</option><option value='+686'>Kiribati</option><option value='+965'>Kuwait</option><option value='+996'>Quirguistão</option><option value='+856'>Laos</option><option value='+371'>Letônia</option><option value='+961'>Líbano</option><option value='+266'>Lesoto</option><option value='+231'>Libéria</option><option value='+218'>Líbia</option><option value='+423'>Liechtenstein</option><option value='+370'>Lituânia</option><option value='+352'>Luxemburgo</option><option value='+853'>Macau</option><option value='+389'>Macedônia</option><option value='+261'>Madagascar</option><option value='+265'>Malawi</option><option value='+60'>Malásia</option><option value='+960'>Maldivas</option><option value='+223'>Mali</option><option value='+356'>Malta</option><option value='+692'>Ilhas Marshall</option><option value='+596'>Martinica</option><option value='+222'>Mauritânia</option><option value='+230'>Maurício</option><option value='+262'>Mayotte</option><option value='+52'>México</option><option value='+373'>Moldávia</option><option value='+377'>Mônaco</option><option value='+976'>Mongólia</option><option value='+382'>Montenegro</option><option value='+1'>Montserrat</option><option value='+212'>Marrocos</option><option value='+258'>Moçambique</option><option value='+95'>Myanmar</option><option value='+264'>Namíbia</option><option value='+674'>Nauru</option><option value='+977'>Nepal</option><option value='+31'>Holanda</option><option value='+687'>Nova Caledônia</option><option value='+64'>Nova Zelândia</option><option value='+505'>Nicarágua</option><option value='+227'>Níger</option><option value='+234'>Nigéria</option><option value='+683'>Niue</option><option value='+672'>Ilha Norfolk</option><option value='+850'>Coreia do Norte</option><option value='+1'>Ilhas Marianas do Norte</option><option value='+47'>Noruega</option><option value='+968'>Omã</option><option value='+92'>Paquistão</option><option value='+680'>Palau</option><option value='+970'>Palestina</option><option value='+507'>Panamá</option><option value='+675'>Papua-Nova Guiné</option><option value='+595'>Paraguai</option><option value='+51'>Peru</option><option value='+63'>Filipinas</option><option value='+48'>Polônia</option><option value='+351'>Portugal</option><option value='+1'>Porto Rico</option><option value='+974'>Catar</option><option value='+242'>República do Congo</option><option value='+262'>Reunião</option><option value='+40'>Romênia</option><option value='+7'>Rússia</option><option value='+250'>Ruanda</option><option value='+290'>Santa Helena</option><option value='+1'>São Cristóvão e Nevis</option><option value='+508'>Saint Pierre e Miquelon</option><option value='+1'>São Vicente e Granadinas</option><option value='+685'>Samoa</option><option value='+378'>San Marino</option><option value='+239'>São Tomé e Príncipe</option><option value='+966'>Arábia Saudita</option><option value='+221'>Senegal</option><option value='+381'>Sérvia</option><option value='+248'>Seychelles</option><option value='+232'>Serra Leoa</option><option value='+65'>Singapura</option><option value='+1'>São Martinho</option><option value='+421'>Eslováquia</option><option value='+386'>Eslovênia</option><option value='+677'>Ilhas Salomão</option><option value='+252'>Somália</option><option value='+27'>África do Sul</option><option value='+82'>Coreia do Sul</option><option value='+211'>Sudão do Sul</option><option value='+34'>Espanha</option><option value='+94'>Sri Lanka</option><option value='+1'>Santa Lúcia</option><option value='+249'>Sudão</option><option value='+597'>Suriname</option><option value='+268'>Suazilândia</option><option value='+46'>Suécia</option><option value='+41'>Suíça</option><option value='+963'>Síria</option><option value='+886'>Taiwan</option><option value='+992'>Tajiquistão</option><option value='+255'>Tanzânia</option><option value='+66'>Tailândia</option><option value='+1'>Bahamas</option><option value='+220'>Gâmbia</option><option value='+670'>Timor-Leste</option><option value='+228'>Togo</option><option value='+690'>Tokelau</option><option value='+676'>Tonga</option><option value='+1'>Trinidad e Tobago</option><option value='+216'>Tunísia</option><option value='+90'>Turquia</option><option value='+993'>Turcomenistão</option><option value='+1'>Ilhas Turcas e Caicos</option><option value='+688'>Tuvalu</option><option value='+256'>Uganda</option><option value='+380'>Ucrânia</option><option value='+971'>Emirados Árabes Unidos</option><option value='+44'>Reino Unido</option><option value='+1'>Estados Unidos</option><option value='+598'>Uruguai</option><option value='+1'>Ilhas Virgens Americanas</option><option value='+998'>Uzbequistão</option><option value='+678'>Vanuatu</option><option value='+58'>Venezuela</option><option value='+84'>Vietnã</option><option value='+681'>Wallis e Futuna</option><option value='+212'>Saara Ocidental</option><option value='+967'>Iêmen</option><option value='+260'>Zâmbia</option>"
       +" </select>"
       +" <div style='margin-top:5px;'></div>"
       +" <select name='ddd' id='"+idDDD+"' class='form-control'>"
       +"     <option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option><option value='25'>25</option><option value='26'>26</option><option value='27'>27</option><option value='28'>28</option><option value='29'>29</option><option value='30'>30</option><option value='31'>31</option><option value='32'>32</option><option value='33'>33</option><option value='34'>34</option><option value='35' selected>35</option><option value='36'>36</option><option value='37'>3