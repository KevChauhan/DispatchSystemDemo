namespace DispatchSystemDemo.Data
{
    public class CardChangedEventArgs : EventArgs
    {
        public CardChangedEventArgs(Card card)
        {
            Card = card;
        }

        public Card Card { get; set; }
    }
}
