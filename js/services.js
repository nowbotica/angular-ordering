angular
	.module('app')
	.factory('Menu', function(){
		return {
			get: function(){
				return [
					{"id":"1","menu_section":"Mic dejun","section_order":"1","item_name":"Kinder Smoothie","weight":"350 ml","price":14,"in_order": true, "number_ordered": 0},
					{"id":"7007","menu_section":"Aperitive","section_order":"1","item_name":"Pateu de migdale cu ardei","weight":"350 ml","price":14, "in_order": false, "number_ordered": 0},
					{"id":"7006","menu_section":"Aperitive","section_order":"1","item_name":"Zacusca","weight":"350 ml","price":14, "in_order": false, "number_ordered": 0},
					{"id":"7005","menu_section":"Mic dejun","section_order":"3","item_name":"Somn usor","weight":"350 ml","price":14, "in_order": false, "number_ordered": 0},
					{"id":"7004","menu_section":"Mic dejun","section_order":"2","item_name":"Cocos Smoothie","weight":"350 ml","price":14, "in_order": false, "number_ordered": 0}
				];
			}
		};
	})