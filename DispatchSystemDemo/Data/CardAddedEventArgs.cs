namespace DispatchSystemDemo.Data
{
    public class CardAddedEventArgs : EventArgs
    {
        public CardAddedEventArgs(Card card)
        {
            Card = card;
        }

        public Card Card { get; set; }
    }
}
