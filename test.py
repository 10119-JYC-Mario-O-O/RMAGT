import pygame

pygame.init()

screen = pygame.display.set_mode((600, 400))

pygame.display.set_caption("Test Project")



running = True

while running:

    for event in pygame.event.get():

        if event.type == pygame.QUIT:

            running = False

    screen.fill((0, 0, 0))

    screen.blit(pygame.font.Font(None, 30).render("Test", True, (255, 255, 255)), (100, 200))

    pygame.display.update()