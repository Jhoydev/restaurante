;(function(){

	let sticky = false
	let currentPosition = 0
	const imageCounter = $("[data-name='image-counter']").attr("content")
	const email = "jhoseph.dev@gmail.com"

	$("#contact-form").on("submit",function(ev){
		ev.preventDefault()
		sendForm($(this))
		return false
	})

	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)

	$(window).scroll(()=>{
		const inBottom = isInBottom()

		if (inBottom &&  !sticky) {
			sticky = true
			stickNavigation()
		}
		if (!inBottom &&  sticky) {
			sticky = false
			unStickNavigation()
		}

	})
	
	setInterval(()=>{
		if (currentPosition < imageCounter) {
			currentPosition++
		}else{
			currentPosition = 0
		}

		$('#gallery .inner').css({
			left: "-"+currentPosition*100+"%"
		})
	},8000)



	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").slideUp("fast")
		$("#sticky-navigation").slideDown("fast")
	}

	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")	
		$("#navigation").slideDown("fast")
		$("#sticky-navigation").slideUp("fast")
	}
	
	function isInBottom(){

		const $description = $("#description")
		const descriptionHeight = $description.height()

		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
	}

	
})()