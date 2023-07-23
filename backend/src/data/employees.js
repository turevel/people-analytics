const employees = [
	{
		name: 'Danielle Winters',
		email: 'daniellewinters@kpis.tech',
		leader_email: null,
		admission: '2021-01-06T00:10:00',
		termination: null,
		job_title: 'Diretor',
		status: true,
	},
	{
		name: 'Pamela Berry',
		email: 'pamelaberry@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2021-01-01T00:08:00',
		termination: '2022-01-17T00:07:00',
		job_title: 'Engenheiro',
		status: false,
	},
	{
		name: 'Richard Manning',
		email: 'richardmanning@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2020-01-28T00:01:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Craig Hammond',
		email: 'craighammond@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2020-01-08T00:10:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Mitchell Peters',
		email: 'mitchellpeters@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2020-01-16T00:03:00',
		termination: '2021-01-14T00:02:00',
		job_title: 'Engenheiro',
		status: false,
	},
	{
		name: 'Adam Sanders',
		email: 'adamsanders@kpis.tech',
		leader_email: 'mitchellpeters@kpis.tech',
		admission: '2020-01-25T00:04:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'John Jackson',
		email: 'johnjackson@kpis.tech',
		leader_email: 'mitchellpeters@kpis.tech',
		admission: '2021-01-28T00:09:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Matthew Flores',
		email: 'matthewflores@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2022-01-01T00:05:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Matthew Beasley',
		email: 'matthewbeasley@kpis.tech',
		leader_email: 'mitchellpeters@kpis.tech',
		admission: '2020-01-09T00:04:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Madison Taylor',
		email: 'madisontaylor@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2021-01-26T00:03:00',
		termination: '2021-01-17T00:06:00',
		job_title: 'Analista',
		status: false,
	},
	{
		name: 'Kyle Bond DDS',
		email: 'kylebonddds@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2021-01-13T00:09:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Jesse Anderson',
		email: 'jesseanderson@kpis.tech',
		leader_email: 'mitchellpeters@kpis.tech',
		admission: '2021-01-11T00:11:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Sharon Santos',
		email: 'sharonsantos@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2022-01-11T00:10:00',
		termination: '2023-01-10T00:08:00',
		job_title: 'Estagiário',
		status: false,
	},
	{
		name: 'Tiffany Ortega',
		email: 'tiffanyortega@kpis.tech',
		leader_email: 'mitchellpeters@kpis.tech',
		admission: '2021-01-25T00:06:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Janet Smith',
		email: 'janetsmith@kpis.tech',
		leader_email: 'mitchellpeters@kpis.tech',
		admission: '2022-01-12T00:06:00',
		termination: '2023-01-03T00:02:00',
		job_title: 'Estagiário',
		status: false,
	},
	{
		name: 'Patrick Cox',
		email: 'patrickcox@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2021-01-11T00:10:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Caitlin Johnston',
		email: 'caitlinjohnston@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2020-01-17T00:12:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Bryan Case',
		email: 'bryancase@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2021-01-06T00:10:00',
		termination: '2022-01-10T00:09:00',
		job_title: 'Engenheiro',
		status: false,
	},
	{
		name: 'Sharon Barr',
		email: 'sharonbarr@kpis.tech',
		leader_email: 'daniellewinters@kpis.tech',
		admission: '2022-01-22T00:08:00',
		termination: null,
		job_title: 'Supervisor',
		status: true,
	},
	{
		name: 'Robin Mcdaniel',
		email: 'robinmcdaniel@kpis.tech',
		leader_email: 'daniellewinters@kpis.tech',
		admission: '2020-01-07T00:12:00',
		termination: null,
		job_title: 'Supervisor',
		status: true,
	},
	{
		name: 'Molly Edwards',
		email: 'mollyedwards@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2020-01-22T00:01:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Amy Dennis',
		email: 'amydennis@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2021-01-26T00:11:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Tony Nelson',
		email: 'tonynelson@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2020-01-25T00:10:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Lawrence Robbins',
		email: 'lawrencerobbins@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2021-01-29T00:08:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Paul Saunders',
		email: 'paulsaunders@kpis.tech',
		leader_email: 'mitchellpeters@kpis.tech',
		admission: '2022-01-18T00:08:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Elizabeth Campbell',
		email: 'elizabethcampbell@kpis.tech',
		leader_email: 'richardmay@kpis.tech',
		admission: '2021-01-12T00:03:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Richard May',
		email: 'richardmay@kpis.tech',
		leader_email: 'daniellewinters@kpis.tech',
		admission: '2022-01-03T00:10:00',
		termination: null,
		job_title: 'Supervisor',
		status: true,
	},
	{
		name: 'Patrick Hall',
		email: 'patrickhall@kpis.tech',
		leader_email: 'mollyedwards@kpis.tech',
		admission: '2020-01-18T00:12:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'James Johnson',
		email: 'jamesjohnson@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2022-01-14T00:04:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Ruth Fernandez',
		email: 'ruthfernandez@kpis.tech',
		leader_email: 'mollyedwards@kpis.tech',
		admission: '2020-01-11T00:10:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Ariel Williams',
		email: 'arielwilliams@kpis.tech',
		leader_email: 'robinmcdaniel@kpis.tech',
		admission: '2020-01-10T00:10:00',
		termination: '2021-01-10T00:10:00',
		job_title: 'Engenheiro',
		status: false,
	},
	{
		name: 'Valerie Johnson',
		email: 'valeriejohnson@kpis.tech',
		leader_email: 'mollyedwards@kpis.tech',
		admission: '2021-01-12T00:09:00',
		termination: '2022-01-14T00:05:00',
		job_title: 'Analista',
		status: false,
	},
	{
		name: 'William Brewer',
		email: 'williambrewer@kpis.tech',
		leader_email: 'robinmcdaniel@kpis.tech',
		admission: '2021-01-21T00:08:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Kelly Thomas',
		email: 'kellythomas@kpis.tech',
		leader_email: 'mitchellpeters@kpis.tech',
		admission: '2021-01-10T00:11:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Kevin Conner',
		email: 'kevinconner@kpis.tech',
		leader_email: 'robinmcdaniel@kpis.tech',
		admission: '2022-01-03T00:02:00',
		termination: '2022-01-15T00:03:00',
		job_title: 'Engenheiro',
		status: false,
	},
	{
		name: 'Daniel Hill',
		email: 'danielhill@kpis.tech',
		leader_email: 'robinmcdaniel@kpis.tech',
		admission: '2021-01-03T00:05:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Barbara Perez',
		email: 'barbaraperez@kpis.tech',
		leader_email: 'kathleenroberts@kpis.tech',
		admission: '2022-01-31T00:10:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Mr. David Ramirez',
		email: 'mr.davidramirez@kpis.tech',
		leader_email: 'robinmcdaniel@kpis.tech',
		admission: '2022-01-08T00:09:00',
		termination: '2023-01-22T00:03:00',
		job_title: 'Engenheiro',
		status: false,
	},
	{
		name: 'Clinton Hayes',
		email: 'clintonhayes@kpis.tech',
		leader_email: 'kathleenroberts@kpis.tech',
		admission: '2021-01-10T00:10:00',
		termination: null,
		job_title: 'Estagiário',
		status: true,
	},
	{
		name: 'Justin Jensen',
		email: 'justinjensen@kpis.tech',
		leader_email: 'kathleenroberts@kpis.tech',
		admission: '2021-01-28T00:01:00',
		termination: '2021-01-27T00:03:00',
		job_title: 'Estagiário',
		status: false,
	},
	{
		name: 'Kathleen Roberts',
		email: 'kathleenroberts@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2021-01-28T00:07:00',
		termination: '2022-01-17T00:02:00',
		job_title: 'Designer',
		status: false,
	},
	{
		name: 'Alicia Smith',
		email: 'aliciasmith@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2021-01-08T00:12:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Craig Sutton III',
		email: 'craigsuttoniii@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2020-01-16T00:11:00',
		termination: null,
		job_title: 'Designer',
		status: true,
	},
	{
		name: 'Michelle Flynn',
		email: 'michelleflynn@kpis.tech',
		leader_email: 'kathleenroberts@kpis.tech',
		admission: '2021-01-25T00:08:00',
		termination: '2022-01-05T00:03:00',
		job_title: 'Designer',
		status: false,
	},
	{
		name: 'Brandon Miller',
		email: 'brandonmiller@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2021-01-17T00:09:00',
		termination: null,
		job_title: 'Estagiário',
		status: true,
	},
	{
		name: 'Michelle Miller',
		email: 'michellemiller@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2021-01-17T00:07:00',
		termination: null,
		job_title: 'Designer',
		status: true,
	},
	{
		name: 'Melinda Terry',
		email: 'melindaterry@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2021-01-20T00:06:00',
		termination: '2021-01-28T00:07:00',
		job_title: 'Designer',
		status: false,
	},
	{
		name: 'Thomas Lopez',
		email: 'thomaslopez@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2021-01-16T00:03:00',
		termination: '2021-01-02T00:09:00',
		job_title: 'Estagiário',
		status: false,
	},
	{
		name: 'Mackenzie Young',
		email: 'mackenzieyoung@kpis.tech',
		leader_email: 'richardmay@kpis.tech',
		admission: '2020-01-21T00:04:00',
		termination: null,
		job_title: 'Designer',
		status: true,
	},
	{
		name: 'Natasha Taylor',
		email: 'natashataylor@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2020-01-13T00:03:00',
		termination: null,
		job_title: 'Designer',
		status: true,
	},
	{
		name: 'William Frost',
		email: 'williamfrost@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2022-01-25T00:08:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Alexandra Thomas',
		email: 'alexandrathomas@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2021-01-13T00:09:00',
		termination: '2021-01-18T00:12:00',
		job_title: 'Analista',
		status: false,
	},
	{
		name: 'Peter Gonzalez',
		email: 'petergonzalez@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2022-01-11T00:07:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Andrew Williams',
		email: 'andrewwilliams@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2021-01-13T00:03:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'David Brady',
		email: 'davidbrady@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2020-01-14T00:06:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Veronica Alvarado',
		email: 'veronicaalvarado@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2021-01-26T00:02:00',
		termination: null,
		job_title: 'Estagiário',
		status: true,
	},
	{
		name: 'Howard Johnston',
		email: 'howardjohnston@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2021-01-04T00:03:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Linda Smith',
		email: 'lindasmith@kpis.tech',
		leader_email: 'richardmay@kpis.tech',
		admission: '2020-01-11T00:08:00',
		termination: null,
		job_title: 'Estagiário',
		status: true,
	},
	{
		name: 'Michael Kim',
		email: 'michaelkim@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2021-01-28T00:08:00',
		termination: null,
		job_title: 'Estagiário',
		status: true,
	},
	{
		name: 'Robert Keith',
		email: 'robertkeith@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2020-01-26T00:10:00',
		termination: '2021-01-05T00:02:00',
		job_title: 'Analista',
		status: false,
	},
	{
		name: 'Jason Wright DDS',
		email: 'jasonwrightdds@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2021-01-31T00:07:00',
		termination: '2021-01-03T00:09:00',
		job_title: 'Estagiário',
		status: false,
	},
	{
		name: 'Mary Hayes',
		email: 'maryhayes@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2020-01-13T00:06:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Shane Bonilla Jr.',
		email: 'shanebonillajr.@kpis.tech',
		leader_email: 'robinmcdaniel@kpis.tech',
		admission: '2021-01-01T00:01:00',
		termination: '2021-01-21T00:07:00',
		job_title: 'Engenheiro',
		status: false,
	},
	{
		name: 'Mr. Brian Dudley',
		email: 'mr.briandudley@kpis.tech',
		leader_email: 'robinmcdaniel@kpis.tech',
		admission: '2021-01-20T00:12:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'James Miller',
		email: 'jamesmiller@kpis.tech',
		leader_email: 'richardmay@kpis.tech',
		admission: '2020-01-19T00:12:00',
		termination: '2021-01-16T00:09:00',
		job_title: 'Engenheiro',
		status: false,
	},
	{
		name: 'Rachael Murphy',
		email: 'rachaelmurphy@kpis.tech',
		leader_email: 'richardmay@kpis.tech',
		admission: '2021-01-16T00:06:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Lori Campbell',
		email: 'loricampbell@kpis.tech',
		leader_email: 'richardmay@kpis.tech',
		admission: '2021-01-18T00:03:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Laurie Marshall',
		email: 'lauriemarshall@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2020-01-21T00:04:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Robert Holmes',
		email: 'robertholmes@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2021-01-22T00:05:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Roger King',
		email: 'rogerking@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2021-01-09T00:07:00',
		termination: null,
		job_title: 'Estagiário',
		status: true,
	},
	{
		name: 'Michael Rodriguez',
		email: 'michaelrodriguez@kpis.tech',
		leader_email: 'loricampbell@kpis.tech',
		admission: '2021-01-03T00:04:00',
		termination: '2021-01-18T00:07:00',
		job_title: 'Estagiário',
		status: false,
	},
	{
		name: 'Crystal Taylor',
		email: 'crystaltaylor@kpis.tech',
		leader_email: 'richardmay@kpis.tech',
		admission: '2020-01-26T00:09:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Erik Gomez',
		email: 'erikgomez@kpis.tech',
		leader_email: 'shanebonillajr.@kpis.tech',
		admission: '2022-01-18T00:03:00',
		termination: '2022-01-03T00:04:00',
		job_title: 'Analista',
		status: false,
	},
	{
		name: 'Ricky Lopez',
		email: 'rickylopez@kpis.tech',
		leader_email: 'robinmcdaniel@kpis.tech',
		admission: '2021-01-04T00:10:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Kristina Hampton',
		email: 'kristinahampton@kpis.tech',
		leader_email: 'richardmay@kpis.tech',
		admission: '2022-01-27T00:09:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Stacy Steele',
		email: 'stacysteele@kpis.tech',
		leader_email: 'richardmay@kpis.tech',
		admission: '2020-01-15T00:12:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Shirley Alexander',
		email: 'shirleyalexander@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2022-01-14T00:01:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Kyle Hogan',
		email: 'kylehogan@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2021-01-10T00:12:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Rebecca Knight',
		email: 'rebeccaknight@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2021-01-10T00:06:00',
		termination: '2022-01-26T00:01:00',
		job_title: 'Engenheiro',
		status: false,
	},
	{
		name: 'Mario Watson',
		email: 'mariowatson@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2022-01-22T00:04:00',
		termination: '2022-01-25T00:10:00',
		job_title: 'Engenheiro',
		status: false,
	},
	{
		name: 'Elizabeth Dawson',
		email: 'elizabethdawson@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2021-01-06T00:09:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Megan Mccarty',
		email: 'meganmccarty@kpis.tech',
		leader_email: 'shanebonillajr.@kpis.tech',
		admission: '2021-01-22T00:03:00',
		termination: '2022-01-14T00:01:00',
		job_title: 'Analista',
		status: false,
	},
	{
		name: 'Evan Gutierrez',
		email: 'evangutierrez@kpis.tech',
		leader_email: 'shanebonillajr.@kpis.tech',
		admission: '2022-01-23T00:07:00',
		termination: '2023-01-12T00:03:00',
		job_title: 'Analista',
		status: false,
	},
	{
		name: 'Patrick Garrison',
		email: 'patrickgarrison@kpis.tech',
		leader_email: 'mollyedwards@kpis.tech',
		admission: '2021-01-09T00:04:00',
		termination: '2022-01-07T00:04:00',
		job_title: 'Analista',
		status: false,
	},
	{
		name: 'Derek Gilbert',
		email: 'derekgilbert@kpis.tech',
		leader_email: 'shanebonillajr.@kpis.tech',
		admission: '2022-01-04T00:02:00',
		termination: '2022-01-10T00:08:00',
		job_title: 'Estagiário',
		status: false,
	},
	{
		name: 'Travis Johnson',
		email: 'travisjohnson@kpis.tech',
		leader_email: 'shanebonillajr.@kpis.tech',
		admission: '2022-01-07T00:06:00',
		termination: '2023-01-18T00:04:00',
		job_title: 'Estagiário',
		status: false,
	},
	{
		name: 'Roberta Stone',
		email: 'robertastone@kpis.tech',
		leader_email: 'richardmay@kpis.tech',
		admission: '2022-01-24T00:05:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Douglas Pittman',
		email: 'douglaspittman@kpis.tech',
		leader_email: 'mollyedwards@kpis.tech',
		admission: '2020-01-31T00:01:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Lisa Robinson',
		email: 'lisarobinson@kpis.tech',
		leader_email: 'mollyedwards@kpis.tech',
		admission: '2021-01-26T00:01:00',
		termination: '2021-01-11T00:03:00',
		job_title: 'Analista',
		status: false,
	},
	{
		name: 'Marissa Hudson DDS',
		email: 'marissahudsondds@kpis.tech',
		leader_email: 'mollyedwards@kpis.tech',
		admission: '2021-01-09T00:08:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Timothy Hays',
		email: 'timothyhays@kpis.tech',
		leader_email: 'shanebonillajr.@kpis.tech',
		admission: '2021-01-15T00:03:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'David Williams',
		email: 'davidwilliams@kpis.tech',
		leader_email: 'shanebonillajr.@kpis.tech',
		admission: '2021-01-17T00:07:00',
		termination: '2022-01-26T00:04:00',
		job_title: 'Analista',
		status: false,
	},
	{
		name: 'Matthew Tyler',
		email: 'matthewtyler@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2021-01-08T00:05:00',
		termination: '2021-01-03T00:11:00',
		job_title: 'Engenheiro',
		status: false,
	},
	{
		name: 'Rachael Mcpherson',
		email: 'rachaelmcpherson@kpis.tech',
		leader_email: 'sharonbarr@kpis.tech',
		admission: '2021-01-02T00:05:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Christopher Rubio',
		email: 'christopherrubio@kpis.tech',
		leader_email: 'robinmcdaniel@kpis.tech',
		admission: '2020-01-17T00:01:00',
		termination: '2020-01-08T00:02:00',
		job_title: 'Engenheiro',
		status: false,
	},
	{
		name: 'Jerry Williamson',
		email: 'jerrywilliamson@kpis.tech',
		leader_email: 'shanebonillajr.@kpis.tech',
		admission: '2022-01-15T00:10:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Ashlee Boyd',
		email: 'ashleeboyd@kpis.tech',
		leader_email: 'richardmay@kpis.tech',
		admission: '2020-01-17T00:09:00',
		termination: '2021-01-29T00:04:00',
		job_title: 'Analista',
		status: false,
	},
	{
		name: 'Ashley Carter',
		email: 'ashleycarter@kpis.tech',
		leader_email: 'shanebonillajr.@kpis.tech',
		admission: '2021-01-23T00:06:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
	{
		name: 'Sara Walters',
		email: 'sarawalters@kpis.tech',
		leader_email: 'robinmcdaniel@kpis.tech',
		admission: '2021-01-13T00:12:00',
		termination: null,
		job_title: 'Engenheiro',
		status: true,
	},
	{
		name: 'Michael Goodwin',
		email: 'michaelgoodwin@kpis.tech',
		leader_email: 'shanebonillajr.@kpis.tech',
		admission: '2021-01-07T00:04:00',
		termination: null,
		job_title: 'Analista',
		status: true,
	},
];

export default employees;
