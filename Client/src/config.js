export const CONFIG = {
  // EmailJS Credentials (For 100% custom corporate-branded email templates)
  // To set up a custom branded layout (with your logo, custom colors, formatting):
  // 1. Register a free account at https://www.emailjs.com
  // 2. Connect your Gmail/Outlook account to get a Service ID.
  // 3. Create a custom email template (e.g. including Name, Email, Phone, Product, etc.) to get a Template ID.
  // 4. Retrieve your Public Key from the Account settings page.
  // 5. Paste these credentials below. If left blank, it will automatically fall back
  //    to sending styled HTML tables via FormSubmit.
  EMAILJS_SERVICE_ID: "",
  EMAILJS_TEMPLATE_ID: "",
  EMAILJS_PUBLIC_KEY: "",

  // Telegram Bot Credentials
  // To receive form alerts on Telegram:
  // 1. Create a bot by messaging @BotFather on Telegram, then copy the API Token.
  // 2. Message @userinfobot or @GetIDBot on Telegram to get your user or group Chat ID.
  // 3. Paste the Token and Chat ID below.
  TELEGRAM_BOT_TOKEN: "",
  TELEGRAM_CHAT_ID: ""
};
