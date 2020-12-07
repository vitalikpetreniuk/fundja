'use strict';
$(function () {
	//dropZone
	// Data for send to the server
	let preparingData = {};
	const dropLabel = $('.drop_label');

	const handlerChange = (e) => {
		preparingData =  e.target.files;
		const fileListArr = Object.values(e.target.files);

		if (fileListArr.length > 0) {
			let currentName;
			$( ".drop_file").remove();
			let markup = '';
			fileListArr.map(({name, lastModified}) => {
				currentName = name;
				markup = `
				<div class="drop_file" id="${lastModified}" >
					<span>${name}</span>
					<button 
						type="button"
						class="drop_remove"
						data-id="${lastModified}"
						onClick="${handlerRemove}"
					>
						&#10006;
					</button>
				</div>
				`;
				return (
					dropLabel.prepend(`${markup}`)
				)
			})
			dropLabel.addClass('drop_list');
			$('.drop_remove').on('click', e => handlerRemove(e));
		} else {
			dropLabel.removeClass('drop_list');
			$( ".drop_file").remove();
		}
	}
	const handlerRemove = (e) => {
		e.preventDefault();
		const currentFile = e.target.getAttribute('data-id')
		$( `#${currentFile}`).remove();
		preparingData =  Object
			.assign({}, Object
				.values(preparingData)
				.filter(el => el.lastModified !== +currentFile));

		if(!Object.values(preparingData).length) {
			dropLabel.removeClass('drop_list');
		}
	};

	$('#dropFiles').on('change', handlerChange);
});