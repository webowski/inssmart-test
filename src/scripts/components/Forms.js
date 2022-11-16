const $detailsForms = document.querySelectorAll('.do-details-form')

$detailsForms.forEach($form => {
	const $detailsList = $form.parentNode.querySelector('.do-details-list')

	$form.addEventListener('submit', e => {
		e.preventDefault()

		const $inputField = $form.elements['feature']
		const isValid = validateField($inputField)

		if (isValid) {
			addListItem($detailsList, $inputField.value)
			$inputField.value = ''
		}
	})
})

function validateField($inputField) {
  if ($inputField.value.length === 0) {
    alert('Поле характерситики не должно быть пустым')
		return false
	}
	return true
}

function addListItem($targetList, value) {
	const newItem = document.createElement('li')

  newItem.appendChild(document.createTextNode(value))
  $targetList.appendChild(newItem)
}
