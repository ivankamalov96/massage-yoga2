function showDetails(service) {
    let detailsContent = document.getElementById('details-content');
    let moreDetails = document.getElementById('more-details');

    // Наполнение контента для каждой услуги
    if (service === 'yoga') {
        detailsContent.innerHTML = `
            <h3>Подробнее о Йоге</h3>
            <p>Йога — это практика, которая помогает не только улучшить физическое состояние, но и гармонизировать внутреннее состояние.</p>
            <p>Мы предлагаем курсы для начинающих и продвинутых. Все занятия проходят в комфортной атмосфере с опытным тренером.</p>
        `;
    } else if (service === 'massage') {
        detailsContent.innerHTML = `
            <h3>Подробнее о Массажах</h3>
            <p>Наши массажи — это идеальное решение для снятия стресса и улучшения общего самочувствия. Мы работаем с различными техниками массажа: классический, тайский, расслабляющий.</p>
        `;
    } else if (service === 'schemotherapy') {
        detailsContent.innerHTML = `
            <h3>Подробнее о Схемотерапии</h3>
            <p>Схемотерапия — это метод, направленный на глубокую проработку психоэмоциональных проблем и снятие психологических блоков.</p>
        `;
    }

    moreDetails.style.display = 'block';
}

function closeDetails() {
    document.getElementById('more-details').style.display = 'none';
}
