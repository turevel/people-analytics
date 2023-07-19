function LoginInterfaceSection() {
	return (
		<div className="bg-indigo-200 text-zinc-50 flex flex-col-reverse sm:flex-col min-h-screen">
			<div className="bg-indigo-500 p-9">
				<h2 className="text-lg font-bold mb-4">
					Desvendando os números por trás do seu time!
				</h2>

				<div className="text-sm space-y-2 bg-indigo-500">
					<p>
          Com gráficos claros e intuitivos, nossa aplicação simplifica
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

			<div className="loginInterfaceSection grow w-full" />
		</div>
	);
}

export default LoginInterfaceSection;
