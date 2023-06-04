import { Snap } from 'midtrans-client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { totalPrice, selectedItems, paymentMethod } = req.body;

      const snap = new Snap({
        isProduction: false,
        serverKey: 'SB-Mid-server-DkcnfBaZymRatOLBvKkLnyCt',
      });

      const paymentOptions = {
        transaction_details: {
          order_id: new Date(),
          gross_amount: totalPrice,
        },
      };

      if (paymentMethod === 'credit_card') {
        paymentOptions.credit_card = {
          secure: true,
        };
      } else if (paymentMethod === 'qris') {
        paymentOptions.qris = {
          action: 'generate',
        };
      } else if (paymentMethod === 'bank_transfer') {
        paymentOptions.bank_transfer = {
          bank: 'all',
        };
      }

      const transactionToken = await snap.createTransaction(paymentOptions);

      const redirectUrl = transactionToken.redirect_url;

      res.status(200).json({ redirectUrl });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}