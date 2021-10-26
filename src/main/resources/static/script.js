var stompClient = null



function sendMessage() {


	let jsonOb = {
		name: localStorage.getItem("name"),
		content: $("#message-value").val()
	}

	stompClient.send("/app/message", {}, JSON.stringify(jsonOb));

}



function connect() {

	let socket = new SockJS("/server1")

	stompClient = Stomp.over(socket)

	stompClient.connect({}, function(frame) {

		console.log("Connected : " + frame)

		$("#name-from").addClass('d-none')
		$("#chat-room").removeClass('d-none')

		//subscribe
		stompClient.subscribe("/topic/return-to", function(response) {

			showMessage(JSON.parse(response.body))

		})
	})
}


function showMessage(message) {
	$("#message-container-table").prepend(`<tr><td><b>${message.name} :</b> ${message.content}</td></tr>`)
}



$(document).ready((e) => {
	$("#login").click(() => {
		// password related code here
		// Allow accessing the camera

		var video = document.querySelector("#videoElement");

		//mediaDevice and userMedia to navigate the access for camera

		if (navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({
				video: true
				// after allowing the camera start the video stream
			}).then(function(stream) {
				video.srcObject = stream
				//play the video
				video.play();
			}).catch(function(error) {
				console.log(error);
			});
		}

		// capture Images

		var image = document.getElementById('image'),
			context = image.getContext('2d');  //setting for resolution of image

		document.getElementById('capture').addEventListener('click', function() {
			// draw a image when the button clicked on the canvas

			context.drawImage(video, 0, 0, image.width, image.height);

		});

		let name = $("#name-value").val()
		localStorage.setItem("name", name)
		$("#name-title").html(`Welcome , <b>${name} </b>`)
		connect()

	})
	$("#send-btn").click(() => {
		sendMessage()
	})
	$("#logout").click(() => {
		localStorage.removeItem("name")
		if (stompClient !== null) {
			stompClient.disconnect()
			$("#name-from").removeClass('d-none')
			$("#chat-room").addClass('d-none')
			console.log(stompClient)
		}
	})

})