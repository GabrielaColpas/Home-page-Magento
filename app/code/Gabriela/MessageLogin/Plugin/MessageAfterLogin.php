<?php
	namespace Gabriela\MessageLogin\Plugin;

	use Magento\Customer\Model\Session;
	use Magento\Framework\Message\ManagerInterface;

	class MessageAfterLogin
	{
		private $messageManager;

		public function __construct(ManagerInterface $messageManager)
	   	{
	       	$this->messageManager = $messageManager;
	   	}

		public function afterSetCustomerDataAsLoggedIn(Session $subject, $result)
		{
			$this->messageManager->addSuccessMessage('Check out our promotions by accessing the travels category.');
			return $result; 
		}
	}


?>