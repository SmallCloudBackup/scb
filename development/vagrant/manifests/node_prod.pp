class prod {
	user {
		"servicechef":
			ensure => present,
			managehome => true
	}

	file {
		"/home/servicechef/.ssh":
			ensure => directory,
			owner => "servicechef",
			group => "servicechef",
			mode => 0700,
			require => User["servicechef"]
	}

	file {
		"/home/servicechef/.ssh/id_rsa":
			ensure => file,
			source => "/vagrant/files/deploy",
			owner => "servicechef",
			group => "servicechef",
			mode => 0600,
			require => [ User["servicechef"],  File["/home/servicechef/.ssh"]]
	}

	file {
		"/home/servicechef/.ssh/known_hosts":
			ensure => file,
			source => "/vagrant/files/known_hosts",
			owner => "servicechef",
			group => "servicechef",
			mode => 0644,
			require => User["servicechef"]
	}
}
