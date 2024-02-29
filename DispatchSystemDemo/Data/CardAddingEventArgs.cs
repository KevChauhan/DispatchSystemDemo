namespace DispatchSystemDemo.Data
{
    public class CardAddingEventArgs : EventArgs
    {
        public CardAddingEventArgs(Card card)
        {
            Card = card;
        }

        public Card Card { get; set; }
        public bool Cancel { get; set; } = false;
    }
}
