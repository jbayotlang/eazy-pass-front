'use strict';


EazyPass.Store = DS.Store.extend({
    adapter: 'EazyPass.EPAdapter'
});

EazyPass.EPAdapter = DS.RESTAdapter.extend({
	url: 'http://localhost:1337',
	namespace: 'api/v1'
})
