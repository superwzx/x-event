


var event = (function () {
	
	return {
		addEventListener: function (event, handler) {
			var bindEvents = this.bindEvent || (this.bindEvent = {});
			var eventList = bindEvents[event] || (bindEvents[event] = []);
			eventList.push({
				name: event,
				handler: handler
			});
			return this;
		},

		removeEventListener: function (event, handler) {
			var bindEvents = this.bindEvent || (this.bindEvent = {});
			var eventList = bindEvents[event];

			if (eventList) {
				if (handler) {
					for (var i = 0, l = eventList.length; i < l; i++) {
						if (eventList[i] == handler) {
							events.splice(i, 1);
						}
					}
				} else {
					eventList = [];
				}
			}
			return this;
		},

		dispatch: function (event) {
			var bindEvents = this.bindEvent || (this.bindEvent = {});
			var eventList = bindEvents[event];
			if (eventList) {
				for (var i = 0, l = eventList.length; i < l; i++) {
					var event = eventList[i];
					event.handler.apply(this, arguments);
				}
			}
			return event;
		}
	}
})();
