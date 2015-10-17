include packagecloud

package {
	"nodejs":
		ensure => present
}

package {
	"npm":
		ensure => present
}

package {
	"git":
		ensure => present
}

package {
    "mongodb":
        ensure => present
}

packagecloud::repo { "rabbitmq/rabbitmq-server":
    type => "deb"
}

import "node_*.pp"

node "prod" {
	include prod	
}

node "dev" {
	include dev
}
