namespace DispatchSystemDemo.Data
{
    public class CardChangingEventArgs : EventArgs
    {
        public CardChangingEventArgs(Card card)
        {
            Card = card;
        }
        public Card Card { get; set; }
        public bool Cancel { get; set; } = false;
    }
}
