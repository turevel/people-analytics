import LoginTemplateLogo from './LoginTemplateLogo';

function LoginTemplate() {
	return (
		<div className="bg-indigo-500 w-full h-full text-zinc-50 loginTemplate">
			<div className="bg-indigo-500 p-9">
				<LoginTemplateLogo />

				<div className="text-sm space-y-2 bg-indigo-500 ">
					<p>
						<strong>Desvendando os números por trás do seu time.</strong>
          &nbsp;Com gráficos claros e intuitivos, nossa aplicação simplifica
          a contagem de headcount e turnover, fornecendo informações valiosas
          para líderes compreenderem o panorama de suas equipes.
					</p>

					<p>
          Tome decisões estratégicas baseadas em dados concretos e identifique
          tendências que impactam seu planejamento. O <em>People Analytics</em> capacita
          você a aumentar a retenção e criar um ambiente de trabalho saudável.
          Descubra o poder dos números e tome decisões informadas com facilidade.
					</p>
				</div>
			</div>
		</div>
	);
}

export default LoginTemplate;
