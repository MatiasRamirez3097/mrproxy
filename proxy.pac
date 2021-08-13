function FindProxyForURL(url, host) {

// If the hostname matches, send direct.
	if (	shExpMatch(host,'192.168.*') ||
		shExpMatch(host,'127.0.0.1') ||
		shExpMatch(host,'10.*') ||
		shExpMatch(host,'rosario.gov.ar') ||
		shExpMatch(host,'rosario.gob.ar') ||
		shExpMatch(host,'*.rosario.gov.ar') ||
		shExpMatch(host,'*.rosario.gob.ar') ||
		shExpMatch(host,'*.santafe.gov.ar') ||
		shExpMatch(host,'*.santafe.gob.ar') ||
		shExpMatch(host,'santafe.gob.ar') ||
		shExpMatch(host,'santafe.gov.ar') ||
		shExpMatch(host,'*.softwarelibremr.*.ar') ||
		shExpMatch(host,'softwarelibremr.*.ar') ||
		shExpMatch(host,'*.rosarinosenred.gob.ar') ||
		shExpMatch(host,'*.rosarinosenred.gov.ar') ||
		shExpMatch(host,'*.rosarinosenred.org.ar') ||
		shExpMatch(host,'*.rosarioaltoque.org.ar') ||
		shExpMatch(host,'rosariocultura.gov.ar') ||
		shExpMatch(host,'rosariocultura.gob.ar') ||
		shExpMatch(host,'*.culturarosario.gob.ar') ||
		shExpMatch(host,'*.rosariocultura.gov.ar') ||
		shExpMatch(host,'*.rosariocultura.gob.ar') ||
		shExpMatch(host,'*.culturarosario.gov.ar') ||
		shExpMatch(host,'*.rosariocultura.org.ar') ||
		shExpMatch(host,'*.culturarosario.org.ar') ||
		shExpMatch(host,'<local>') ||
		shExpMatch(host,'*.netflix.com') ||
		shExpMatch(host,'netflix.com') ||
		shExpMatch(host,'*.facebook.com') ||
		shExpMatch(host,'facebook.com'))
		return "DIRECT";

// If the protocol or URL matches, send direct.
	if (	shExpMatch(url,'192.168.*') ||
		shExpMatch(url,'127.0.0.1') ||
		shExpMatch(url,'10.*') ||
		shExpMatch(url,'rosario.gov.ar') ||
		shExpMatch(url,'rosario.gob.ar') ||
		shExpMatch(url,'*.rosario.gov.ar') ||
		shExpMatch(url,'*.rosario.gob.ar') ||
		shExpMatch(url,'*.santafe.gov.ar') ||
		shExpMatch(url,'*.santafe.gob.ar') ||
		shExpMatch(url,'santafe.gob.ar') ||
		shExpMatch(url,'santafe.gov.ar') ||
		shExpMatch(url,'*.softwarelibremr.*.ar') ||
		shExpMatch(url,'softwarelibremr.*.ar') ||
		shExpMatch(url,'*.rosarinosenred.gob.ar') ||
		shExpMatch(url,'*.rosarinosenred.gov.ar') ||
		shExpMatch(url,'*.rosarinosenred.org.ar') ||
		shExpMatch(url,'*.rosarioaltoque.org.ar') ||
		shExpMatch(url,'rosariocultura.gov.ar') ||
		shExpMatch(url,'rosariocultura.gob.ar') ||
		shExpMatch(url,'*.culturarosario.gob.ar') ||
		shExpMatch(url,'*.rosariocultura.gov.ar') ||
		shExpMatch(url,'*.rosariocultura.gob.ar') ||
		shExpMatch(url,'*.culturarosario.gov.ar') ||
		shExpMatch(url,'*.rosariocultura.org.ar') ||
		shExpMatch(url,'*.culturarosario.org.ar') ||
		shExpMatch(url,'<local>'))
		return "DIRECT";

// If the requested website is hosted within the internal network, send direct.
	/*if (isPlainHostName(host) ||
		shExpMatch(host, "*.local") ||
		isInNet(dnsResolve(host), "10.*", "255.0.0.0") ||
		isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0") ||
		isInNet(dnsResolve(host), "192.168.20.*",  "255.255.0.0") ||
		isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0") ||
		isInNet(dnsResolve(host), "*rosario.*") ||
		isInNet(dnsResolve(host), "*santafe.*") ||
		isInNet(dnsResolve(host), "*softwarelibremr.*.*") ||
		isInNet(dnsResolve(host), "*.rosariocultura.*") ||
		isInNet(dnsResolve(host), "*.culturarosario.*")
		isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0") ||
                isInNet(dnsResolve(host), "*rosario.*") ||
                isInNet(dnsResolve(host), "*santafe.*") ||
                isInNet(dnsResolve(host), "*softwarelibremr.*.*") ||
                isInNet(dnsResolve(host), "*.rosariocultura.*") ||
                isInNet(dnsResolve(host), "*.culturarosario.*"))
		return "DIRECT";*/

// If the IP address of the local machine is within a defined
// subnet, send to a specific proxy.
	/*if (isInNet(myIpAddress(), "10.10.5.0", "255.255.255.0"))
		return "PROXY 1.2.3.4:8080";*/
	if (myIpAddress() == "192.168.20.219" ||
		myIpAddress() == "192.168.20.74" ||
		myIpAddress() == "192.168.20.184" ||
		myIpAddress() == "192.168.20.189")
		return "PROXY proxyespecial.svc.rosario.gov.ar:3128";

// DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
	return "PROXY proxydgt.svc.rosario.gov.ar:3128";

}
