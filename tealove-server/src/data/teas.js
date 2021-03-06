const teas = [{
  id: 1,
  brand: 'Lipton',
  name: 'Earl Grey',
}, {
  id: 2,
  brand: 'Lipton',
  name: 'Blueberry Muffin',
}, {
  id: 3,
  brand: 'Black Cat',
  name: '21:00',
}, {
  id: 4,
  brand: 'Twinings',
  name: 'English Strong Breakfast',
  description: 'Lively & full of flavour',
}, {
  id: 5,
  brand: 'Twinings',
  name: 'English Breakfast',
  description: 'Golden & well rounded',
}, {
  id: 6,
  brand: 'Twinings',
  name: 'English Afternoon',
  description: 'Light & refreshing',
}, {
  id: 7,
  brand: 'Twinings',
  name: 'Assam',
  description: 'Strong & malty',
}, {
  id: 8,
  brand: 'Twinings',
  name: 'Everyday',
  description: 'Rich & full bodied. Decaffeinated',
}, {
  id: 9,
  brand: 'Twinings',
  name: 'Everyday',
  description: 'Rich & full bodied',
}, {
  id: 10,
  brand: 'Twinings',
  name: 'Lemon & Ginger',
  description: 'All natural ingredients*',
}, {
  id: 11,
  brand: 'Twinings',
  name: 'Strawberry & Raspberry',
  description: 'All natural ingredients*',
}, {
  id: 12,
  brand: 'Twinings',
  name: 'Blackcurrant & Blueberry',
  description: 'All natural ingredients*',
}, {
  id: 13,
  brand: 'Twinings',
  name: 'Spiced Ginger',
  description: 'All natural ingredients*',
}, {
  id: 14,
  brand: 'Twinings',
  name: 'Pure Camomile',
  description: 'All natural ingredients*',
}, {
  id: 15,
  brand: 'Twinings',
  name: 'Double Mint',
  description: 'All natural ingredients*',
}, {
  id: 16,
  brand: 'Twinings',
  name: 'Apple & Pear',
  description: 'Naturally caffeine free with all natural ingredients*',
}, {
  id: 17,
  brand: 'Twinings',
  name: 'Blueberry & Apple',
  description: 'Naturally caffeine free with all natural ingredients*',
}, {
  id: 18,
  brand: 'Twinings',
  name: 'Refreshing Rosehip & Apple',
  description: 'Naturally caffeine free with all natural ingredients*',
}, {
  id: 19,
  brand: 'Twinings',
  name: 'Sleep',
  description: 'Relax and drift away. All natural ingredients*',
}, {
  id: 20,
  brand: 'Twinings',
  name: 'Lemon Trio',
  description: 'Naturally caffeine free with all natural ingredients*',
}, {
  id: 21,
  brand: 'Twinings',
  name: 'Pomegranate & Raspberry',
  description: 'Naturally caffeine free with all natural ingredients*',
}, {
  id: 22,
  brand: 'Twinings',
  name: 'Energising Peppermint & Nettle',
  description: 'Naturally caffeine free with all natural ingredients*',
}];

module.exports.list = ({ fromIndex, limit }) => teas.slice(fromIndex, fromIndex + limit);

module.exports.search = ({ fromIndex, limit, query }) => {
  const queryLowerCase = query.toLowerCase();
  return teas.slice(fromIndex)
    .filter(({ brand, name }) => name.toLowerCase().includes(queryLowerCase) || brand.toLowerCase().includes(queryLowerCase))
    .slice(0, limit);
};

module.exports.findById = id => teas.find(tea => tea.id === id);
