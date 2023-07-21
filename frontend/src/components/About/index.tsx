function About() {
	return (
		<div className="flex h-full min-h-screen flex-col-reverse bg-indigo-200 text-zinc-50 lg:flex-col">
			<div className="bg-indigo-500 p-9">
				<h2 className="mb-4 text-lg font-bold">
          Desvendando os números por trás do seu time!
				</h2>

				<div className="space-y-2 bg-indigo-500 text-sm">
					<p>
            Com gráficos claros e intuitivos, nossa aplicação simplifica a
            contagem de headcount e turnover, fornecendo informações valiosas
            para líderes compreenderem o panorama de suas equipes.
					</p>

					<p>
            Tome decisões estratégicas baseadas em dados concretos e identifique
            tendências que impactam seu planejamento. O{' '}
						<em>People Analytics</em> capacita você a aumentar a retenção e
            criar um ambiente de trabalho saudável. Descubra o poder dos números
            e tome decisões informadas com facilidade.
					</p>
				</div>
			</div>

			<div className="loginInterfaceBackgroundImage min-h-[260px] w-full grow opacity-80" style={{ backgroundColor: '#b4c6f0' }} />
		</div>
	);
}

export default About;
