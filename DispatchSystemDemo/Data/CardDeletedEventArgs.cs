namespace DispatchSystemDemo.Data
{
    public class CardDeletedEventArgs : EventArgs
    {
        public CardDeletedEventArgs(Card card)
        {
            Card = card;
        }

        public Card Card { get; set; }
    }
}
